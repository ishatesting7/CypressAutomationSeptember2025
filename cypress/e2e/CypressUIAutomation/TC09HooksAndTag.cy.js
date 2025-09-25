describe('Hooks and Tags in Cypress', () => {
    before(() => {
        // Runs once before all tests in the block
        cy.log('Executing before all tests');
    });

    beforeEach(() => {
        // Runs before each test in the block
        cy.log('Executing before each test');
    });

    afterEach(() => {
        // Runs after each test in the block
        cy.log('Executing after each test');
    });

    after(() => {
        // Runs once after all tests in the block
        cy.log('Executing after all tests');
    });

    it('Test Case 1 - @smoke', () => {
        cy.log('Executing Test Case 1 - Smoke Test');
        // Add your test code here
    });

    it('Test Case 2 - @regression', () => {
        cy.log('Executing Test Case 2 - Regression Test');
        // Add your test code here
    });
    it('Test Case 3 DemoTitle',{tags:'@SMOKEREGRESSION'} ,() => {
        cy.log('Executing Test Case 2 - Regression Test');
        // Add your test code here
    });

    //Write the Tags - @smoke, @regression in the test cases
    //cypress command to run the smoke test cases - 
    //npx cypress run --spec "cypress/e2e/CypressUIAutomation/TC09HooksAndTag.cy.js" --env grepTags=@smoke
    //npx cypress run --spec "cypress/e2e/CypressUIAutomation/TC09HooksAndTag.cy.js" --env grepTags=@regression

});