const { defineConfig } = require("cypress");

module.exports = defineConfig({
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

      viewportHeight = 660;
      viewportWidth = 1000;
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
