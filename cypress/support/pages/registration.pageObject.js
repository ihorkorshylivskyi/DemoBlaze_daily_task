class RegistrationPageObject {
  elements = {
    usernameField: () => cy.get('#sign-username'),
    passwordField: () => cy.get('#sign-password'),
    signUpButton: () => cy.contains('button', 'Sign up')
  }

  typeUsername(username) {
    this.elements.usernameField().type(username);
  }

  typePassword(password) {
    this.elements.passwordField().type(password);
  }

  clickSignUpButton() {
    this.elements.signUpButton().click();
  }
}

export default RegistrationPageObject;
