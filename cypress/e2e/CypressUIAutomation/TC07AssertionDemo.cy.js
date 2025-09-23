describe('Assertion Discussion', ()=>{

    it("Implicit Assertion", ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.title().should('equal','Automation Testing Practice')
        cy.url().should('eq','https://testautomationpractice.blogspot.com/');
        cy.url().should('contain', 'automation')
        cy.get('#name').should('be.visible');
        cy.get('#Wikipedia1_wikipedia-search-input').should('not.be.visible')

    })

    it.only("Explicit Assertion", ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/').as('visitURL')
        // cy.visit('').timeout(2000).should(')
        cy.get('@visitURL');

        cy.get('[href="https://testautomationpractice.blogspot.com/p/playwrightpractice.html"]').then(($temp)=>{

            let value = $temp.text();
            expect(value).to.eq('PlaywrightPractice');
        })

    })
})