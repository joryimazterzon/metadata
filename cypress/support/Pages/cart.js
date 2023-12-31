/// <reference types="cypress"/>

import GlobalNav from './globalNav';

let selector = {
  deleteProduct: 'a[onclick^="deleteItem"]',
  placeOrder: 'h2 + div + button.btn-success',
  name: '#name',
  country: '#country',
  city: '#city',
  card: '#card',
  month: '#month',
  year: '#year',
  submitPurchase: 'button[onclick="purchaseOrder()"]',
  prices: '#tbodyid td:nth-child(3)',
  total: '#totalp',
  thankyouMessage: 'div.showSweetAlert h2',
  purchaseData: 'div.showSweetAlert p.text-muted',
};

export default class Cart extends GlobalNav {
  deleteProductByIndex(index) {
    cy.get(selector.prices).should('have.length', 2);
    cy.get(selector.deleteProduct).eq(index).click();
    cy.get(selector.prices).should('have.length', 1);
  }
  clickPlaceOrder() {
    cy.get(selector.placeOrder).click();
  }
  enterName(name) {
    cy.get(selector.name).type(name);
  }
  enterCountry(country) {
    cy.get(selector.country).type(country);
  }
  enterCity(city) {
    cy.get(selector.city).type(city);
  }
  enterCard(card) {
    cy.get(selector.card).type(card);
  }
  enterMonth(month) {
    cy.get(selector.month).type(month);
  }
  enterYear(year) {
    cy.get(selector.year).type(year);
  }
  submitPurchaseOrder() {
    cy.get(selector.submitPurchase).click();
  }

  validatePrice() {
    let sum = 0;
    cy.get(selector.prices)
      .each((el, index) => {
        sum += Number(el.text());
      })
      .then(() => {
        cy.get(selector.total).should('have.text', sum);
      });
  }

  validateSuccessfulPurchase() {
    cy.get(selector.thankyouMessage).should(
      'have.text',
      'Thank you for your purchase!'
    );
  }

  validatePurchaseData() {
    cy.get(selector.purchaseData).then((item) => {
      //Id: 7551605Amount: 800 USDCard Number: 1582496875136958Name: Mazterzon SmitDate: 11/8/2023
      const text = item.text().trim().split(':');
      expect(text[4]).equal(
        ` ${Cypress.env('demoblaze-place-order-name')}Date`
      );
      expect(text[3]).equal(
        ` ${Cypress.env('demoblaze-place-order-cc-number')}Name`
      );
    });
  }
}
