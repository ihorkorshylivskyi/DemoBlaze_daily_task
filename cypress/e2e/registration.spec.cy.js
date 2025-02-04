import { faker } from "@faker-js/faker";
import MainPageObject from "../support/pages/main.pageObject";
import RegistrationPageObject from "../support/pages/registration.pageObject";

const testData = {
  username: faker.internet.username(),
  password: faker.internet.password()
}

const mainPage = new MainPageObject();
const registrationForm = new RegistrationPageObject();

describe('Registration form', () => {
  
  beforeEach(() => {
    mainPage.visit();
  });

  it('should provide user the ability to sign up', () => {
    mainPage.clickSignUpLink();
    mainPage.waitForOpen();

    registrationForm.typeUsername(testData.username);
    registrationForm.typePassword(testData.password);
    registrationForm.clickSignUpButton();

    mainPage.assertAlertMessageContains('Sign up successful.');
  });
});
