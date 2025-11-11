const fs = require('fs');
const path = require('path');

it('Run SQL script file', () => {
  const scriptPath = path.join(__dirname, '../../scripts/demo2.sql');
  const sql = fs.readFileSync(scriptPath, 'utf8');

  cy.task('queryDb', sql).then((result) => {
    cy.log('SQL script executed successfully');
  });
});
