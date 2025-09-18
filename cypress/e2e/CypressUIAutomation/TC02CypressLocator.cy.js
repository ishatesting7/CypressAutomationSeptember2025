describe('Cypress Locator Test Suite', () => { // Test Scenarios
    it('Cypress Locator Test Case', () => { // Test Case
        cy.visit('https://www.saucedemo.com/')

    })
    it('Cypress Locator Test Case 2', function(){ // Test Case  
        cy.visit('https://www.saucedemo.com/');
    
    })
    it('Cypress Locator Test Case 3', () => { // Test Case
        cy.visit('https://www.saucedemo.com/');
    })
})

describe('Regression Testing', ()=>{

    it('Verify the login with valid username and password', ()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    it('verify the login with invalid username and password', ()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    it('Regression Test Case 2', ()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Regression Test Case 3', ()=>{
        cy.visit('https://www.saucedemo.com/')
    })
})

//4 Modules - Paymethod, Payment, Shipping, Order
//Paymethod Folder
// - Scenario 1 - Credit Card
    // - Valid Credit Card
    // - Invalid Credit Card
    // - Invalid CVV
    // - Expired Credit Card
// - Scenario 2 - Debit Card    
    // - Valid Debit Card
    // - Invalid Debit Card
    // - Invalid CVV
    // - Expired Debit Card
// - Scenario 3 - Net Banking
    // - Valid Net Banking
    // - Invalid Net Banking
// - Scenario 4 - UPI
    // - Valid UPI
    // - Invalid UPI

//Payment Folder - Paytm, Google Pay, PhonePe, RazorPay, Amazon Pay
// - Scenario 1 - Payment Gateway 1
    // - Valid Payment Gateway 1
    // - Invalid Payment Gateway 1
// - Scenario 2 - Payment Gateway 2    
    // - Valid Payment Gateway 2
    // - Invalid Payment Gateway 2