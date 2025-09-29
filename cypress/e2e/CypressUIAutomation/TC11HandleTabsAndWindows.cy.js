describe('Handle Tabs and Windows in Cypress', () => {
  it('Open a new tab and verify content', () => {
    cy.viewport(1280, 720);
    cy.visit('https://the-internet.herokuapp.com/windows');

    cy.get('[href="/windows/new"]').invoke('removeAttr', 'target').click();
    
    cy.url().should('include', '/windows/new');
    cy.contains('New Window').should('be.visible');

  });

    it('Open a new window and verify content', () => {
    cy.viewport(1280, 720);
    cy.visit('https://the-internet.herokuapp.com/windows');

    cy.window().then((win) => {
      const newWindow = win.open('/windows/new', '_blank', 'width=800,height=600');
      cy.wrap(newWindow).as('newWindow');
    });
  });
  
});