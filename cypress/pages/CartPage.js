// cypress/pages/CartPage.js
import BasePage from './BasePage';

export default class CartPage extends BasePage {
  cartItem = '.cart_item';
  checkoutButton = '[data-test="checkout"]';

  // Wait until the cart page is loaded
  waitForPage() {
    this.shouldBeVisible(this.checkoutButton);
  }

  // Verify number of items in cart
  verifyCartItemsCount(expectedCount) {
    this.get(this.cartItem).should('have.length', expectedCount);
  }

  // Proceed to checkout
  checkout() {
    this.click(this.checkoutButton);
  }
}
