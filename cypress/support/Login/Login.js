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
