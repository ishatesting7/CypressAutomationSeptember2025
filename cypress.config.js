const { defineConfig } = require("cypress");
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
module.exports = defineConfig({
  projectId: "ett8e1",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',

    experimentalStudio: true,
    watchForFileChanges:false,
    pageLoadTimeout:40000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
       on('task', {
        readXlsx({ file }) {
          const workbook = xlsx.readFile(file);
          const sheetName = workbook.SheetNames[0];
          const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
          return data;
        }
      });
      return config;
      // implement node event listeners here
    },
    env: {
      urlqa: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      email: "admin",
      password: "admin123",
      urlqaapi: "https://reqres.in/api/users?page=2",
      urlstage: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      urlprod: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    },
    
  },
});
