class ParaBankHomePage {
    baseURL = "https://parabank.parasoft.com/parabank/index.htm"

    elements = {
        usernameInput: () => cy.get('input[name="username"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        loginButton: () => cy.get('input[value="Log In"]'),
        errorMessage: () => cy.get('.error'),
        registrationButton: () => cy.get('a[href*="register.htm"]')
    } 
   visit(){
    cy.visit(this.baseURL);
   }
   clickRegister(){
    this.elements.registrationButton().click();
   }
    enterUsername(username){
        this.elements.usernameInput().type(username);
    }
    enterPassword(password){
        this.elements.passwordInput().type(password);
    }
    clickLogin(){
        this.elements.loginButton().click();
    }
    getErrorMessage(){
        return this.elements.errorMessage();
    }
}  
export default new ParaBankHomePage();