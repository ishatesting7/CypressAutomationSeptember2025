// Handle Mouse Operation in Cypress

describe('Mouse Operations in Cypress', () => {
   
    it('Performs Double Click Operation', () => {
        // Locate the button and perform double click
        cy.visit('https://vinothqaacademy.com/mouse-event/');
        cy.get('[id="dblclick"]').dblclick();

        // Verify the success message
        cy.get('#demo')
            .should('be.visible')
            .and('have.text', 'Double Click Action is Performed');
    });
    it('Performs Right Click Operation', () => {
        // Locate the button and perform right click
        cy.visit('https://vinothqaacademy.com/mouse-event/');
        cy.get('[id="rightclick"]').rightclick();

        // Verify the success message
        cy.get('[id="myDiv"] ul center').should('be.visible').and('have.length', 3);

        cy.get('[id="myDiv"]').should('be.visible');

        cy.get('[id="myDiv"] ul center').eq(0).should('have.text','Registration Form');
        cy.get('[id="myDiv"] ul center').eq(1).should('have.text','Alert Popup');
        cy.get('[id="myDiv"] ul center').eq(2).should('have.text','Mouse Event');
        
        // Validate the text using each()   
        const expectedText = ['Registration Form', 'Alert Popup', 'Mouse Event'];
        cy.get('#myDiv ul center').each((element, index)     => {
            expect(element.text()).to.equal(expectedText[index]);
            cy.wrap(element).should('be.visible');
            cy.log(element.text());
        });
    })
    it('Performs Drag and Drop Operation', () => {
        // Visit the drag and drop demo page
        cy.visit('https://testautomationpractice.blogspot.com/');

        // Perform drag and drop operation
        cy.get('#draggable').trigger('mousedown', { which: 1 });
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });

        // Verify the success message
        cy.get('#droppable p').should('have.text', 'Dropped!');
    })
    it.only('Performs Mouse Hover Operation', () => {
        // Visit the mouse hover demo page
        cy.visit('https://testautomationpractice.blogspot.com/');

        // Perform mouse hover operation
        //cy.get('.dropdown').eq(0).trigger('mouseover', { force: true });

        cy.get('.dropbtn').click();
         
        cy.wait(2000);

        // Verify the visibility of the dropdown content
        cy.get('.dropdown-content').should('be.visible');
    })
    it('Performs Slider Operation', () => {
        // Visit the slider demo page
        cy.visit('https://testautomationpractice.blogspot.com/');

        // Perform slider operation
        cy.get('#slider > span').invoke('attr', 'style', 'left: 80%;');

        // Verify the slider position
        cy.get('#slider > span').should('have.attr', 'style', 'left: 80%;');
    })
})