// cypress/pages/LoginPage.js
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  usernameInput = '[data-test="username"]';
  passwordInput = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';

  visit() {
    cy.visit('/');
    this.shouldBeVisible(this.usernameInput);
  }

  login(username, password) {
    this.type(this.usernameInput, username);
    this.type(this.passwordInput, password);
    this.click(this.loginButton);
  }
}
