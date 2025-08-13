// cypress/pages/ProductListPage.js
import BasePage from './BasePage';

export default class ProductListPage extends BasePage {
  productItem = '.inventory_item';
  cartLink = '.shopping_cart_link';

  waitForPage() {
    this.shouldBeVisible(this.productItem);
  }

  addRandomItemsToCart(count = 3) {
    this.get(this.productItem).then(items => {
      const total = items.length;
      const indexes = Cypress._.sampleSize([...Array(total).keys()], count);
      indexes.forEach(idx => {
        cy.wrap(items[idx]).find('button').click();
      });
    });
  }

  goToCart() {
    this.click(this.cartLink);
  }
}
