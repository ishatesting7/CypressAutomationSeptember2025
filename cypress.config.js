const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      this.viewportHeight = 660;
      this.viewportWidth = 1000;
      this.watchForFileChanges = false;
      // implement node event listeners here
    },
  },
});
