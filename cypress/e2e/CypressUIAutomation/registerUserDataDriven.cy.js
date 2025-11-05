describe('User Registration Data Driven Tests', () => {


    it('Register Multiple Users From Fixture', () => {
        cy.fixture('testData').then((users) => {
            users.forEach((user) => {
                cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
                
                cy.get('#input-firstname').type(user.firstName);
                cy.get('#input-lastname').type(user.lastName);
                cy.get('#input-email').type(user.email);
                cy.get('#input-telephone').type(user.password);
                cy.get('#input-password').type(user.password); 
                cy.get("#input-confirm").type(user.confirmPassword);
                if (user.newsletter === 'Yes') 
                {
                    cy.get('[for="input-newsletter-yes"]').should("not.be.checked");
                    cy.get('[for="input-newsletter-yes"]').click();
                    cy.get('[for="input-newsletter-yes"]').should('be.visible');
                }
                else if(user.newsletter ==='No')
                {
                    cy.get('[for="input-newsletter-no"]').should("not.be.checked");
                    cy.get('[for="input-newsletter-no"]').click();
                    cy.get('[for="input-newsletter-no"]').should('be.visible');
                }
                

            });
        });
    });
})