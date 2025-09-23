describe('Dropdown', ()=>{

    it('Dropdown', ()=>{

        cy.visit('https://www.amazon.in/');
        cy.get('[id="twotabsearchtextbox"]').type('iPhone');
        cy.wait(1000);
        cy.get('[class="s-suggestion-container"]').should('have.length',10);
    })

    it('Dropdown Ireland', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application');
        cy.get('[class="select2-selection__rendered"]').click();
        cy.get('[class="select2-search__field"]').type('Ireland').type("{enter}");


    })

    it('Dropdown with Select Tag', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('[id="country"]').select("australia");
        
    })
})