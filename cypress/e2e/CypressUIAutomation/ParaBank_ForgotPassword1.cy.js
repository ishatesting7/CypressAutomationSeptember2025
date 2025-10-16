import ForgotLoginPage from "../../support/pageObjects/ForgotLoginPage"
describe('ParaBank Forgot Login Info Tests', () => {


  beforeEach(() => {
    ForgotLoginPage.visit()
  })

  it('Positive Test - Valid Customer Details', () => {
    cy.fixture('forgotLoginData').then((data) => {
      const validData = data.forgotLoginTests[0]
      ForgotLoginPage.enterCustomerDetails(validData.data)
      ForgotLoginPage.submit()
      ForgotLoginPage.verifyResult(validData.expectedResult)
    })
  })

  it('Negative Test - Invalid Customer Details', () => {
    cy.fixture('forgotLoginData').then((data) => {
      const invalidData = data.forgotLoginTests[1]
      ForgotLoginPage.enterCustomerDetails(invalidData.data)
      ForgotLoginPage.submit()
      ForgotLoginPage.verifyResult(invalidData.expectedResult)
    })
  })

})
