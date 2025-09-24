const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    pageLoadTimeout:40000,
    setupNodeEvents(on, config) {
      viewportHeight = 660;
      viewportWidth = 1000;
      // implement node event listeners here
    },
  },
});
