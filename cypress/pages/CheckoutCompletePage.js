// cypress/pages/CheckoutCompletePage.js
import BasePage from './BasePage';

export default class CheckoutCompletePage extends BasePage {
  completeHeader = '.complete-header';
  completeText = '.complete-text';
  backHomeButton = '[data-test="back-to-products"]';

  // Wait until the confirmation page loads
  waitForPage() {
    this.shouldBeVisible(this.completeHeader);
  }

  // Verify success message
  verifyOrderSuccess() {
    this.get(this.completeHeader).should('contain.text', 'Thank you for your order!');
    this.get(this.completeText).should('contain.text', 'Your order has been dispatched');
  }

  // Navigate back to products page
  backToHome() {
    this.click(this.backHomeButton);
  }
}
