//Javascript class to store the locators and methods of a page
class LoginPage {
  // Locators - Page elements
  usernameInput = '#username';
  passwordInput = '#password';
  loginButton = '#loginBtn';

  // Method to perform login action - Page actions
  login(username, password) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }
  
}
module.exports = new LoginPage();