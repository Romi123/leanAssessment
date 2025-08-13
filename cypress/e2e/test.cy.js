// cypress/e2e/test.cy.js

import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import CheckoutCompletePage from '../pages/CheckoutCompletePage';

describe('Sauce Demo - Complete Checkout Flow', () => {
  const loginPage = new LoginPage();
  const productListPage = new ProductListPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const checkoutCompletePage = new CheckoutCompletePage();

  const username = Cypress.env('username') || 'standard_user';
  const password = Cypress.env('password') || 'secret_sauce';
  const firstName = Cypress.env('firstName') || 'Romi';
  const lastName = Cypress.env('lastName') || 'Varghese';
  const postalCode = Cypress.env('postalCode') || '00000';

  it('should login, add 3 random items, checkout and verify order success', () => {
    // Visit login page (baseUrl is set in cypress.config.js for the selected env)
    loginPage.visit();

    // Login with environment-based credentials
    loginPage.login(username, password);

    // Wait for product list page
    productListPage.waitForPage();

    // Add 3 random items to cart
    productListPage.addRandomItemsToCart(3);

    // Go to cart page
    productListPage.goToCart();
    cartPage.waitForPage();
    cartPage.verifyCartItemsCount(3);

    // Proceed to checkout
    cartPage.checkout();
    checkoutPage.waitForPage();

    // Fill checkout details and continue
    checkoutPage.fillDetailsAndContinue(firstName, lastName, postalCode);

    // Verify summary and finish order
    checkoutPage.verifySummary(3);
    checkoutPage.finishOrder();

    // Verify order success
    checkoutCompletePage.waitForPage();
    checkoutCompletePage.verifyOrderSuccess();

    // Back to home
    checkoutCompletePage.backToHome();
    productListPage.waitForPage();
  });
});
