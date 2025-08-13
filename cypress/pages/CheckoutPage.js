// cypress/pages/CheckoutPage.js
import BasePage from './BasePage';

export default class CheckoutPage extends BasePage {
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = '[data-test="lastName"]';
  postalCodeInput = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  finishButton = '[data-test="finish"]';
  summaryInfo = '.summary_info';
  cartItem = '.cart_item';

  // Wait until the checkout page loads
  waitForPage() {
    this.shouldBeVisible(this.firstNameInput);
  }

  // Fill in checkout details and click Continue
  fillDetailsAndContinue(firstName, lastName, postalCode) {
    this.type(this.firstNameInput, firstName);
    this.type(this.lastNameInput, lastName);
    this.type(this.postalCodeInput, postalCode);
    this.click(this.continueButton);
  }

  // Verify summary page has correct number of items
  verifySummary(expectedCount) {
    this.get(this.summaryInfo).should('contain.text', 'Payment Information');
    this.get(this.cartItem).should('have.length', expectedCount);
  }

  // Finish the order
  finishOrder() {
    this.click(this.finishButton);
  }
}
