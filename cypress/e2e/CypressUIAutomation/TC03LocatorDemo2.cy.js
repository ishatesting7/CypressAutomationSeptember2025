describe('Locator Test Suite', () => { // Test Scenarios

    it('Locator Test Case', () => { // Test Case


        cy.visit('https://tutorialsninja.com/demo/')
        
        //1. ID Locator
        cy.get('[name="search"]').type('Apple MacBook Pro 13-inch')
        cy.get('[name="search"]').clear()
        
        
    })

})