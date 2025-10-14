describe('Drag and Drop Test', ()=>{

    it('Drag and Drop Example', ()=>{
        cy.visit('https://demo.guru99.com/test/drag_drop.html')

        // Drag and Drop - BANK to Debit Side
        cy.get('#credit2 > a').drag('#bank', {force: true})

        // Drag and Drop - 5000 to Debit Side
        cy.get('#fourth > a').drag('#amt7')

        // Drag and Drop - SALES to Credit Side
        cy.get('#credit1 > a').drag('#loan')

        // Drag and Drop - 5000 to Credit Side
        cy.get('#fourth > a').drag('#amt8')

        // Verify Perfect text is displayed
        cy.get('#equal > a').should('have.text', 'Perfect!')
})
})
