describe('Slider Operation in Cypress', () => {
  it.only('Move slider to the right', () => {
    cy.viewport(1280, 720);
    cy.visit('https://app.talentriver.ai/en/auth/sign-in');

    cy.contains('Sign in').should('be.visible');
    cy.get('input[name="email"]').type("pooja.gangavathi@talentriver.ai");
    cy.get('input[name="password"]').type("Poojagv@1994", { log: false });
    cy.get('button').contains('Sign in').click();
    cy.url({ timeout: 20_000 }).should('include', '/en/dashboard');
    cy.get('#header', { timeout: 20_000 }).should('exist');

    cy.get('.tiptap.ProseMirror')
      .should('exist')
      .click()
      .type('Full Stack Developer', { delay: 50 })
      .type('{enter}', { timeout: 20_000 });

    cy.get('.wizard .btn-next', { timeout: 20_000 })
      .should('be.visible')
      .click({ force: true });

    cy.get('.statement').first().click({ force: true });

    cy.contains('any experience')
      .should('exist')
      .click({ force: true });

    // ✅ Drag slider to the right
  });
});
