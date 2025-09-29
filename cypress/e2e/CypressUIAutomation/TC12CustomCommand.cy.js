describe('Custom Command in Cypress', () => {
    it('Use a custom command to perform login', () => {
        cy.viewport(1280, 720);
        cy.visit("https://the-internet.herokuapp.com/")
        cy.selectValueFromDropdown('#dropdown', 'Option 1');
        cy.get('#dropdown').should('have.value', '1');
    });
});
