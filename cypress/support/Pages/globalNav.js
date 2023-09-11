/// <reference types="cypress"/>

let selector = {
  loginBtn: '#login2',
  welcomeMessage: '#nameofuser',
  logoutBtn: '[onclick="logOut()"]',
  signUpBtn: '[data-target="#signInModal"]',
  home: 'a.nav-link[href="index.html"]',
  cart: '#cartur',
};

export default class GlobalNav {
  navigateToHome() {
    cy.get(selector.home).click();
  }
  /**
   * Clicks on the Logout button
   *
   *
   * @example
   *    GlobalNav.logout()
   */
  logout() {
    cy.get(selector.logoutBtn).click();
    cy.get(selector.signUpBtn).should('have.text', 'Sign up');
  }

  openLoginModal() {
    cy.get(selector.loginBtn).click();
  }
  openSignUpModal() {
    cy.get(selector.signUpBtn).click();
  }

  navigateToCart() {
    cy.get(selector.cart).click();
  }

  /**
   * Validate welcome message of succesful login
   *
   * @argument {String} Text to be compared
   *
   * @example
   *    GlobalNav.validateWelcomeMessage('Welcome Smith')
   */
  validateWelcomeMessage(text) {
    cy.get(selector.welcomeMessage).should('have.text', text);
  }
}
