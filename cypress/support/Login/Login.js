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

When('I sign up with random user', () => {
  cy.visit('/');
  login.openSignUpModal();
  login.signUpUser();
});

Then('I can login with random user', () => {
  cy.wait(10000);
  login.openLoginModal();
  const user = Cypress.env('demoblaze-signup-username');
  const pass = Cypress.env('demoblaze-signup-password');
  login.loginUser(user, pass);
  cy.wait(4000);
  login.validateWelcomeMessage(
    `Welcome ${Cypress.env('demoblaze-signup-username')}`
  );
});

Then('I can logout', () => {
  login.logout();
});

When('I login with invalid user', () => {
  cy.visit('/');
  login.openLoginModal();
  login.loginUser(login.randomData(), login.randomData());
  cy.on('window:alert', (t) => {
    expect(t).to.contains('User does not exist.');
  });
});
