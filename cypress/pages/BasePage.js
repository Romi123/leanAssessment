// cypress/pages/BasePage.js
export default class BasePage {
  get(locator) {
    return cy.get(locator);
  }

  click(locator) {
    this.get(locator).click();
  }

  type(locator, text) {
    this.get(locator).type(text);
  }

  shouldBeVisible(locator) {
    this.get(locator).should('be.visible');
  }
}
