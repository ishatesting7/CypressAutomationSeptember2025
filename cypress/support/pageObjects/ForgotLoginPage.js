class ForgotLoginPage {
  
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/lookup.htm')
  }

  enterCustomerDetails(data) {
    cy.get('input[name="firstName"]').clear().type(data.firstName)
    cy.get('input[name="lastName"]').clear().type(data.lastName)
    cy.get('input[name="address.street"]').clear().type(data.address)
    cy.get('input[name="address.city"]').clear().type(data.city)
    cy.get('input[name="address.state"]').clear().type(data.state)
    cy.get('input[name="address.zipCode"]').clear().type(data.zipCode)
    cy.get('input[name="ssn"]').clear().type(data.ssn)
  }

  submit() {
    cy.get('input[value="Find My Login Info"]').click()
  }

  verifyResult(expected) {
    if (expected.status === 'success') {
      cy.contains(expected.message, { matchCase: false }).should('exist')
    } else {
      cy.contains(expected.message, { matchCase: false }).should('exist')
    }
  }
}

export default new ForgotLoginPage()