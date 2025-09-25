describe('Title and Tags in Cypress',()=>{

    
        it('Check Title of Cypress Website',()=>{
            cy.title().should('eq','JavaScript End to End Testing Framework | cypress.io')
        })
    
})