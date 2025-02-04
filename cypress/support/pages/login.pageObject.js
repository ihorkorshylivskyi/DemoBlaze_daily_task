class LoginPageObject {
  elements = {
    usernameField: () => cy.get('#loginusername'),
    passwordField: () => cy.get('#loginpassword'),
    logInButton: () => cy.contains('button', 'Log in')
  }

  typeUsername(username) {
    this.elements.usernameField().type(username);
  }

  typePassword(password) {
    this.elements.passwordField().type(password);
  }

  clickLogInButton() {
    this.elements.logInButton().click();
  }
}

export default LoginPageObject;
