/// <reference types="cypress"/>

import GlobalNav from './globalNav';

let selector = {
  usernameTxb: '#loginusername',
  passwordTxb: '#loginpassword',
  submitLoginBtn: '[onclick="logIn()"]',
  signUpUsername: '#sign-username',
  signUpPassword: '#sign-password',
  signUpButton: 'button[onclick="register()"]',
  logOutButton: 'a[onclick="logOut()"]',
};

export default class Login extends GlobalNav {
  /**
   * Perform a loging to demoblaze with the credentials provided
   *
   * @argument {String} username
   * @argument {String} password
   *
   * @example
   *    Login.loginUser('admin','A$#11#')
   */
  loginUser(username, password) {
    cy.get(selector.usernameTxb).clear().type(username);
    cy.get(selector.passwordTxb).clear().type(password);
    cy.get(selector.submitLoginBtn).click();
  }

  signUpUser() {
    cy.wait(3000);
    const username = this.randomData();
    const password = this.randomData();
    console.log(username);
    console.log(password);
    Cypress.env('demoblaze-signup-username', username);
    Cypress.env('demoblaze-signup-password', password);
    cy.get(selector.signUpUsername).type(username);
    cy.get(selector.signUpPassword).type(password);
    cy.get(selector.signUpButton)
      .click()
      .then(() => {
        cy.on('window:alert', (t) => {
          expect(t).to.contains('Sign up successful.');
        });
      });
  }

  randomData() {
    let letter = '';
    let number = '';
    let letterCharacters = 'ABCDEFGHIJKLMNOPQRSTVWXYZ';
    let numCharacters = '0123456789';
    let letterLen = letterCharacters.length;
    let numLen = numCharacters.length;

    for (let i = 0; i < 4; i++) {
      letter += letterCharacters.charAt(Math.floor(Math.random() * letterLen));
    }

    for (let j = 0; j < 8; j++) {
      number += numCharacters.charAt(Math.floor(Math.random() * numLen));
    }
    return letter.concat(number);
  }
}
