/// <reference types="cypress"/>

import { Then } from '@badeball/cypress-cucumber-preprocessor';
import Home from '../Pages/home';

const homePage = new Home();

Then('I select sub-category to add a device', (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.navigateToHome();
    homePage.validateTotalProducts(element.category, element.totalProducts);
  });
});
