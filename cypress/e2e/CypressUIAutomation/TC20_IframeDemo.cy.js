describe('Iframe Handling on The Internet App', () => {

  context('1️⃣ /frames page validation', () => {

    it('Should verify all available frame options', () => {
      cy.visit('https://the-internet.herokuapp.com/frames');
      
      // Validate title and page content
      cy.get('h3').should('have.text', 'Frames');
      cy.contains('Nested Frames').should('have.attr', 'href', '/nested_frames');
      cy.contains('iFrame').should('have.attr', 'href', '/iframe');
    });
  });

  context('2️⃣ /iframe single frame validation', () => {

    it('Should switch to iframe and validate content', () => {
      cy.visit('https://the-internet.herokuapp.com/iframe');
      
      // Validate the heading
      cy.get('h3').should('have.text', 'An iFrame containing the TinyMCE WYSIWYG Editor');
      
      // Load and interact with iframe
      cy.frameLoaded('#mce_0_ifr');
      cy.iframe('#mce_0_ifr').find('p').clear().type('Cypress iframe test successful ✅');
      cy.iframe('#mce_0_ifr').find('p').should('contain.text', 'Cypress iframe test successful ✅');
    });
  });

  context('3️⃣ /nested_frames multi-frame validation', () => {

    it('Should navigate between top, left, middle, right, and bottom frames', () => {
      cy.visit('https://the-internet.herokuapp.com/nested_frames');

      // Access the top frame (which itself has nested frames)
      cy.frameLoaded('frame[name="frame-top"]');

      // Access the left frame
      cy.iframe('frame[name="frame-top"]').then(($topFrame) => {
        const leftFrame = $topFrame.contents().find('frame[name="frame-left"]');
        cy.wrap(leftFrame).then((lf) => {
          const leftBody = lf.contents().find('body');
          cy.wrap(leftBody).should('contain.text', 'LEFT');
        });
      });

      // Access the middle frame
      cy.iframe('frame[name="frame-top"]').then(($topFrame) => {
        const midFrame = $topFrame.contents().find('frame[name="frame-middle"]');
        cy.wrap(midFrame).then((mf) => {
          const midBody = mf.contents().find('div');
          cy.wrap(midBody).should('contain.text', 'MIDDLE');
        });
      });

      // Access the right frame
      cy.iframe('frame[name="frame-top"]').then(($topFrame) => {
        const rightFrame = $topFrame.contents().find('frame[name="frame-right"]');
        cy.wrap(rightFrame).then((rf) => {
          const rightBody = rf.contents().find('body');
          cy.wrap(rightBody).should('contain.text', 'RIGHT');
        });
      });

      // Access the bottom frame
      cy.frameLoaded('frame[name="frame-bottom"]');
      cy.iframe('frame[name="frame-bottom"]').find('body').should('contain.text', 'BOTTOM');
    });
  });

});
