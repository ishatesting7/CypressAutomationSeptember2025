describe('Cypress ViewPort Test Suite', () => {
    it('Cypress ViewPort Test Case', () => {
        
        cy.viewport(1280, 720) // Set viewport to 1280x720
        cy.visit('https://www.saucedemo.com/')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Verify that the login was successful by checking for the presence of the products page
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
    })
    it('Cypress ViewPort for ipad Test Case', () => {
        
        cy.viewport('ipad-2') // Set viewport to iPhone 6/7/8 dimensions
        cy.visit('https://www.saucedemo.com/')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Verify that the login was successful by checking for the presence of the products page
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
    })
    it('Cypress ViewPort for iphone-6 Test Case', () => {
        
        cy.viewport('iphone-6') // Set viewport to iPhone 6/7/8 dimensions
        cy.visit('https://www.saucedemo.com/')      
        cy.get('#user-name').type('standard_user')  
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        
        // Verify that the login was successful by checking for the presence of the products page
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
    })
    
     it('Cypress ViewPort for iphone-6 Test Case', () => {
        
        cy.visit('https://www.saucedemo.com/')      
        cy.get('#user-name').type('standard_user')  
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        
        // Verify that the login was successful by checking for the presence of the products page
        cy.url().should('include', '/inventory.html')
        cy.get('.title').should('have.text', 'Products')
    })

})