import ParaBankForgotPassword from "../../support/pageObjects/ParaBankForgotPassword";
import ParaBankHomePage from "../../support/pageObjects/ParaBankHomePage";

describe('Forgot Password Test', () => {
    it('should navigate to the forgot password page and submit the form', () => {
        // Visit the Parabank forgot password page
        ParaBankHomePage.visit();
        cy.wait(2000);
        cy.contains('Forgot login info?').should('be.visible');
        cy.contains('Forgot login info?').click({force:true});
        cy.url().should('include', 'https://parabank.parasoft.com/parabank/lookup.htm');
        // Fill out the forgot password form
        ParaBankForgotPassword.enterDetailsForForgotPassword();
        // Submit the forgot password form
        ParaBankForgotPassword.elements.forgetBtn().click();
    })

    it('should navigate to the forgot password page and submit the form', () => {
        // Visit the Parabank forgot password page
        ParaBankHomePage.visit();
        cy.wait(2000);
        cy.contains('Forgot login info?').should('be.visible');
        cy.contains('Forgot login info?').click({force:true});
        cy.url().should('include', 'https://parabank.parasoft.com/parabank/lookup.htm');
        // Fill out the forgot password form
        ParaBankForgotPassword.enterDetailsForForgotPassword();
        // Submit the forgot password form
        ParaBankForgotPassword.elements.forgetBtn().click();
    })
    
})
