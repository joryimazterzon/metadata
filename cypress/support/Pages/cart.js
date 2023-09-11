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
};

export default class Cart extends GlobalNav {
  deleteProductByIndex(index) {
    cy.get(selector.deleteProduct).eq(index).click();
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
}
