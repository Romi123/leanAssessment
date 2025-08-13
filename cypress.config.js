import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin.js';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      mochawesome(on);

      const environment = config.env.ENV || 'prod';
      const urls = {
        qa: 'https://hub.qa.saucedemo.com',
        staging: 'https://hub.stag.saucedemo.com',
        prod: 'https://www.saucedemo.com'
      };
      config.baseUrl = urls[environment];

      return config;
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true, // optional but recommended
    inlineAssets: true
  },
});
