const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // Desactivam la seguridad de Chrome 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
