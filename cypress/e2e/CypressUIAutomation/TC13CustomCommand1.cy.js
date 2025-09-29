describe('Orange HRMS Login using Custom Command', () => {
    it('Login to Orange HRMS', () => {
        cy.viewport(1280, 720);
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.login('Admin', 'admin123');
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-userdropdown-tab').should('be.visible').click();
        cy.logout();
        cy.url().should('include', '/auth/login');
    });
});