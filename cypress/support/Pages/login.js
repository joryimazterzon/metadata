/// <reference types="cypress"/>

import GlobalNav from './globalNav';

let selector = {
  usernameTxb: '#loginusername',
  passwordTxb: '#loginpassword',
  submitLoginBtn: '[onclick="logIn()"]',
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
}
