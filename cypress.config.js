const { defineConfig } = require("cypress");
const mysql = require('mysql2');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

function queryTestDb(query, config) {
  // Create connection
  const connection = mysql.createConnection({
    host: 'localhost',     // your DB host
    user: 'root',          // your DB user
    password: 'password',  // your DB password
    database: 'testdb'     // your database name
  });
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else resolve(results);
      connection.end();
    });
  });
}

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
        },
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
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
