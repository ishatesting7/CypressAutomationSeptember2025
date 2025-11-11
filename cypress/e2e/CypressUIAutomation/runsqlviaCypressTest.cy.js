describe('Database Testing', () => {
    it('Fetch data from MySQL', () => {
      const query = 'SELECT * FROM users WHERE id = 1';
  
      cy.task('queryDb', query).then((result) => {
        cy.log(JSON.stringify(result));
        expect(result[0].username).to.equal('admin');
      });
    });
  });
  