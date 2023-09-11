/// <reference types="cypress"/>

import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import Login from '../Pages/login';
import Home from '../Pages/home';
import Cart from '../Pages/cart';

const login = new Login();
const products = new Home();
const productCart = new Cart();

When('I login with to www.demoblaze.com', () => {
  cy.visit('/');
  login.openLoginModal();
  login.loginUser(
    Cypress.env('demoblaze-username'),
    Cypress.env('demoblaze-password')
  );
  login.validateWelcomeMessage(Cypress.env('demoblaze-welcome-message'));
});

Then('I select Phones category to add a device', (datatable) => {
  datatable.hashes().forEach((element) => {
    login.navigateToHome();
    products.selectCategory(element.category);
    products.addProductToCartByIndex(element.index);
  });
});

Then('I visit the cart and remove one item', (datatable) => {
  datatable.hashes().forEach((element) => {
    login.navigateToCart();
    productCart.validatePrice();
    productCart.deleteProductByIndex(element.index);
  });
});

Then('place the order and purchase', () => {
  cy.wait(3000);
  productCart.clickPlaceOrder();
  productCart.enterName(Cypress.env('demoblaze-place-order-name'));
  productCart.enterCountry(Cypress.env('demoblaze-place-order-country'));
  productCart.enterCity(Cypress.env('demoblaze-place-order-city'));
  productCart.enterCard(Cypress.env('demoblaze-place-order-cc-number'));
  productCart.enterMonth(Cypress.env('demoblaze-place-order-cc-month'));
  productCart.enterYear(Cypress.env('demoblaze-place-order-cc-year'));
  productCart.submitPurchaseOrder();
  productCart.validateSuccessfulPurchase();
});
