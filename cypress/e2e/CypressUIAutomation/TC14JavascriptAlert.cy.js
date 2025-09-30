describe('Handling JavaScript Alerts', () => {
    it('should handle a JavaScript alert', () => {
        // Visit the page with the JavaScript alert
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsAlert()"]').click();
        // Listen for the window:alert event and assert the alert text
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('I am a JS Alert');
        });
        
        // Click the button that triggers the alert
        cy.contains('Click for JS Alert').click();      
    });
    it('Click on JS Confirm and validate the alert text', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('[onclick="jsConfirm()"]').click();
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.equal('I am a JS Confirm');
        });
        cy.get('#result').should('have.text', 'You clicked: Ok');
        // click on cancel button
        // cy.get('[onclick="jsConfirm()"]').click();
        // cy.on('window:confirm', () => false);
        // cy.get('#result').should('have.text', 'You clicked: Cancel');


    });
    it('Click on JS Prompt and validate the alert text', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Demo Cypress');
            cy.get('[onclick="jsPrompt()"]').click();
        });
        cy.get('#result').should('have.text', 'You entered: Demo Cypress');
    });
});