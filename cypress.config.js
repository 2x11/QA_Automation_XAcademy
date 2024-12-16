const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity: false, // Desactivam la seguridad de Chrome 

    //reportes html con Mochawesome
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: { 
      charts:true,
      reportPageTitle: "My Report",
      embeddedScreenshots: true,
      inlineAsserts:true,
    },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  video:true,
  screenshotOnRunFailure:true,
  videosFolder: "cypress/videos",
  screenShootsFolder:"cypress/screenshoots",
});
