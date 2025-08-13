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

  it('should login, add 3 random items, checkout and verify order success', () => {
    // Visit login page
    loginPage.visit();

    // Login as standard user
    loginPage.login('standard_user', 'secret_sauce');

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
    checkoutPage.fillDetailsAndContinue('Romi', 'Varghese', '00000');

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
