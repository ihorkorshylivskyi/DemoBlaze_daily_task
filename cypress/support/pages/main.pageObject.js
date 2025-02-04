import PageObject from "./PageObject";

class MainPageObject extends PageObject {
  url = '/';

  elements = {
    logInLink: () => cy.get('#login2'),
    signUpLink: () => cy.get('#signin2'),
    userGreeting: () => cy.get('#nameofuser'),
    sumsungGalaxyS6Link: () => cy.contains('Samsung galaxy s6'),
    addToCartButton: () => cy.contains('.btn', 'Add to cart')
  }

  clickLogInLink() {
    this.elements.logInLink().click();
  }

  clickSignUpLink() {
    this.elements.signUpLink().click();
  }

  clickGoodsLink() {
    this.elements.sumsungGalaxyS6Link().click();
  }

  clickAddToCartButton() {
    this.elements.addToCartButton().click();
  }

  assertAlertMessageContains(message) {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains(message);
    });
  }

  assertUserGreetingIsVisible() {
    this.elements.userGreeting().should('be.visible');
  }

  waitForOpen() {
    cy.wait(1000);
  }
}

export default MainPageObject;
