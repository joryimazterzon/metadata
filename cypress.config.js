const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

module.exports = defineConfig({
  video: false,
  reporter: 'cypress-multi-reporters',
  chromeWebSecurity: false,
  pageLoadTimeout: 150000,
  defaultCommandTimeout: 90000,

  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', browserify.default(config));

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://www.demoblaze.com/',
    chromeWebSecurity: false,
  },
});
