import ParaBankRegistration from "../../support/pageObjects/ParaBankRegistration"
import ParaBankHomePage from "../../support/pageObjects/ParaBankHomePage"

describe('Parabank Registration Test', () => {
    it('should register a new user successfully', () => {
        // Visit the Parabank registration page

        ParaBankHomePage.visit();
        ParaBankHomePage.elements.usernameInput().should('be.visible');
        ParaBankHomePage.elements.passwordInput().should('be.visible');
        ParaBankHomePage.elements.loginButton().should('be.visible');
        ParaBankHomePage.elements.loginButton().should('be.enabled');
        ParaBankHomePage.elements.loginButton().click();
        ParaBankHomePage.clickRegister();
        cy.url().should('include', 'register.htm');
        // Fill out the registration form
        ParaBankRegistration.enterCompleteRegistrationDetailsWithFaker();
        // Submit the registration form
        ParaBankRegistration.clickRegisterBtn();
    })

})
