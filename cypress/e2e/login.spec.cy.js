/// <reference types='cypress' />

import { faker } from "@faker-js/faker";
import LoginPageObject from "../support/pages/login.pageObject";
import MainPageObject from "../support/pages/main.pageObject";

const testData = {
  username: faker.internet.username(),
  password: faker.internet.password()
}

const logInForm = new LoginPageObject();
const mainPage = new MainPageObject();

describe('Login form', () => {

  before(() => {
    mainPage.visit();
    mainPage.clickSignUpLink();
    mainPage.waitForOpen();
    cy.register(testData.username, testData.password);
    mainPage.assertAlertMessageContains('Sign up successful.');
  })

  it('should provide registered user the ability to log in', () => {
    mainPage.clickLogInLink();
    mainPage.waitForOpen();

    logInForm.typeUsername(testData.username);
    logInForm.typePassword(testData.password);
    logInForm.clickLogInButton();

    mainPage.assertUserGreetingIsVisible();
  })
})
