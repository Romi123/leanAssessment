// cypress/support/e2e.js

// Register Mochawesome reporter (use only import here)
import 'cypress-mochawesome-reporter/register';

// Import commands.js using require
require('./commands');

// Handle uncaught exceptions to prevent tests from failing
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
