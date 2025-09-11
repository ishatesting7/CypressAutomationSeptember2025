describe('Visit Command In Cypress', ()=>{

    it('Visit Cypress Website', ()=>{
        cy.visit('https://www.cypress.io/')
    })

    it('Visit Automation Test Store Website', ()=>{
        cy.visit('https://www.automationteststore.com/')
    })

    it('Visit Orange HRM Website', ()=>{
        cy.visit('https://www.orangehrm.com/')
    })

    it('Visit Test Automation University Website', ()=>{
        cy.visit('https://testautomationu.applitools.com/')
    })

    it('Visit Sauce Demo Website', ()=>{
        cy.visit('https://www.saucedemo.com/')
    })
})