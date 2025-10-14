describe('Keyboard Actions - Search Product', () => {
    it('Search product using Enter key', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/');
    cy.get('#search input[name="search"]') // Locate search bar
      .type('iPhone{enter}'); // Type + Press Enter
    
    cy.url().should('include', 'search=iPhone');
    cy.contains('iPhone').should('be.visible');

      });

    it('Use Tab to navigate login form', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

    cy.get('#input-email').type('user@example.com'); // move to password
    cy.press(Cypress.Keyboard.Keys.TAB);
    
    cy.focused().should('have.attr', 'id', 'input-password');
    
    cy.focused().type('Password123{enter}'); // press Enter to submit
    });

    it.only('Clear text and retype', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/');
    cy.get('#search input[name="search"]')
       .first()
      .type('Laptop',{ delay: 2000 })
      .clear()
      .type('MacBook{enter}');

    cy.contains('MacBook').should('be.visible');
  });

   it('Use backspace and arrow keys', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/');
    cy.get('#search input[name="search"]')
      .first()
      .type('iphonne') // Typo
      .wait(1000)
      .type('{leftArrow}{leftArrow}{backspace}') // Move left twice, delete 'n'
      .wait(1000)
      
    cy.contains('iPhone').should('be.visible');
  });

});


  
