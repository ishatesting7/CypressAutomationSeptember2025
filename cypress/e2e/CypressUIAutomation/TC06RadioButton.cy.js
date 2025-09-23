describe('Radio Button and Checkboxes',()=>{

    it('Radio Button', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('[id="male"]').check();
        
        cy.wait(2000);

        cy.get('[id="female"]').check();

    })

    it('Check and Uncheck Boxes', function(){

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('[id="sunday"]').check();

        cy.get('[id="sunday"]').uncheck();
    })
})