import { defineConfig } from 'cypress';
import mochawesome from 'cypress-mochawesome-reporter/plugin.js';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);

      const envName = config.env.ENV || 'qa';
      const envConfig = require(path.resolve(`./cypress/config/${envName}.json`));

      Object.assign(config.env, envConfig);
      config.baseUrl = envConfig.baseUrl;

      return config;
    }
  }
});
