describe('Cypress Flipkart Search Test Suite', () => { // Test Scenarios
    
    it('Cypress Flipkart Search Test Case', () => { // Test Case        

        cy.visit('https://www.amazon.in/')

        cy.get('[placeholder="Search Amazon.in"]').type('iPhone 15 Pro Max{enter}')

    })
})
