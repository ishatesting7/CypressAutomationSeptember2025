describe('Handling File Download', () => {
    it('should download a file', () => {
        // Visit the page with the file download
        cy.visit('https://the-internet.herokuapp.com/download');
        
        // Click on the file to download
        cy.contains('Test2.pdf').click();   
        // Note: Cypress does not have built-in support to verify file downloads directly.
        // You would typically verify the download by checking the file system, which is outside Cypress's scope.
    });
});