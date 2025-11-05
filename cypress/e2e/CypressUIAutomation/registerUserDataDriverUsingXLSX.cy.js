describe('User Registration Data Driven Tests', () => {
  
  it('Register Multiple Users From Excel', () => {


    const excelFilePath = 'cypress/fixtures/ecommerce_register_data.xlsx';

    cy.task('readXlsx', { file: excelFilePath }).then((users) => {
      users.forEach((user) => {

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

        cy.get('#input-firstname').type(user.firstName);
        cy.get('#input-lastname').type(user.lastName);
        cy.get('#input-email').type(user.email);
        cy.get('#input-telephone').type(user.telephone);
        cy.get('#input-password').type(user.password);
        cy.get('#input-confirm').type(user.confirmPassword);

        if (user.newsletter === 'Yes') {
          cy.get('[for="input-newsletter-yes"]').click();
        } else {
          cy.get('[for="input-newsletter-no"]').click();
        }

        cy.contains('I have read and agree to the').click();

        cy.get('[value="Continue"]').click();

        cy.url().should('include', 'success');
      });
    });
  });
});
