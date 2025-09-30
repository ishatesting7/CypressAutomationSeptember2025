const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    watchForFileChanges:false,
    pageLoadTimeout:40000,
    setupNodeEvents(on, config) {
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
