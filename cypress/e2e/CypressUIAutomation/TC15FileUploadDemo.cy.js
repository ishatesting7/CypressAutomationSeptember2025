describe('Handling File upload', () => {
    it('should upload a file', () => {
        // Visit the page with the file upload
        cy.visit('https://the-internet.herokuapp.com/upload');

        // Upload the file
        const fileName = 'example.json';
        cy.get('#file-upload').attachFile(fileName);
        cy.get('attach-file-input').selectFile(fileName,{})
        cy.get('#file-submit').click();

        // Verify the file upload was successful
        cy.get('h3').should('have.text', 'File Uploaded!');
        cy.get('#uploaded-files').should('contain', fileName);
    });

    //Upload Multiple Files
    it.only('should upload multiple files', () => {
        // Visit the page with the file upload
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        // Upload multiple files

        cy.get('[name="filesToUpload"]').selectFile(['cypress/fixtures/example.json', 'cypress/fixtures/simple.pdf'], { force: true });

        // Verify the files are selected
        cy.get('#fileList').should('contain', 'example.json');
        cy.get('#fileList').should('contain', 'simple.pdf');

    });
});