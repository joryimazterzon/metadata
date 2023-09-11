/// <reference types="cypress"/>

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import Cart from '../Pages/cart';

const productCart = new Cart();

Then('validate info in confirmation popup', () => {
  productCart.validatePurchaseData();
});
