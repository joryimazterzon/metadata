/// <reference types="cypress"/>

import GlobalNav from './globalNav';

let selector = {
  product: 'h4.card-title a',
  addToCartBtn: '[onclick^="addToCart"]',
};

export default class Home extends GlobalNav {
  /**
   *
   * @param {string} category to filter results `phone` | `notebook` | `monitor`
   */
  selectCategory(category) {
    cy.get(`a[onclick="byCat('${category}')"]`).click();
  }

  addProductToCartByIndex(index) {
    cy.get(selector.product).eq(index).click();
    cy.get(selector.addToCartBtn).click();
  }

  validateTotalProducts(category, length) {
    cy.get(`a[onclick="byCat('${category}')"]`)
      .click()
      .then(() => {
        cy.get(selector.product).should('have.length', length);
      });
  }
}
