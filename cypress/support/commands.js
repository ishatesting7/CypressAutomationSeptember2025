// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

Cypress.Commands.add('checkTitle',(title)=>{
    cy.visit('https://www.cypress.io/');
    cy.title().should('eq','JavaScript End to End Testing Framework | cypress.io')
    
})

require('@4tw/cypress-drag-drop')

Cypress.Commands.add('selectValueFromDropdown',(locator,value)=>{
    cy.get('[href="/dropdown"]').click();
    cy.get(locator).select(value)
})  

// cypress/support/commands.js

// 1. Login
Cypress.Commands.add('login', (email, password) => {
  cy.get('[name="username"]').type(email)
  cy.get('[name="password"]').type(password)
  cy.get('button[type="submit"]').click()
})

// 2. Logout
Cypress.Commands.add('logout', () => {
  cy.get('[href="/web/index.php/auth/logout"]').click()
})

// 3. Fill Textbox
Cypress.Commands.add('fillTextbox', (selector, text) => {
  cy.get(selector).clear().type(text)
})

// 4. Click Button
Cypress.Commands.add('clickButton', (selector) => {
  cy.get(selector).should('be.visible').click()
})

// 5. Select Dropdown by Text
Cypress.Commands.add('selectDropdown', (selector, option) => {
  cy.get(selector).select(option)
})

// 6. Check Checkbox
Cypress.Commands.add('checkBox', (selector) => {
  cy.get(selector).check()
})

// 7. Uncheck Checkbox
Cypress.Commands.add('uncheckBox', (selector) => {
  cy.get(selector).uncheck()
})

// 8. Toggle Radio Button
Cypress.Commands.add('selectRadio', (selector) => {
  cy.get(selector).check()
})

// 9. Hover over Element
Cypress.Commands.add('hover', (selector) => {
  cy.get(selector).trigger('mouseover')
})

// 10. Double Click
Cypress.Commands.add('doubleClick', (selector) => {
  cy.get(selector).dblclick()
})

// 11. Right Click
Cypress.Commands.add('rightClick', (selector) => {
  cy.get(selector).rightclick()
})

// 12. Upload File
Cypress.Commands.add('uploadFile', (selector, filePath) => {
  cy.get(selector).attachFile(filePath)
})

// 13. Drag and Drop
Cypress.Commands.add('dragAndDrop', (source, target) => {
  cy.get(source).drag(target)
})

// 14. Clear Input
Cypress.Commands.add('clearInput', (selector) => {
  cy.get(selector).clear()
})

// 15. Scroll to Element
Cypress.Commands.add('scrollToElement', (selector) => {
  cy.get(selector).scrollIntoView()
})

// 16. Assert Text
Cypress.Commands.add('assertText', (selector, expectedText) => {
  cy.get(selector).should('contain.text', expectedText)
})

// 17. Assert Element Visible
Cypress.Commands.add('isVisible', (selector) => {
  cy.get(selector).should('be.visible')
})

// 18. Assert Element Not Visible
Cypress.Commands.add('isNotVisible', (selector) => {
  cy.get(selector).should('not.be.visible')
})

// 19. Navigate to URL
Cypress.Commands.add('navigate', (url) => {
  cy.visit(url)
})

// 20. Take Screenshot
Cypress.Commands.add('takeScreenshot', (fileName) => {
  cy.screenshot(fileName)
})



// 1. Assert element is visible
Cypress.Commands.add('assertVisible', (selector) => {
  cy.get(selector).should('be.visible')
})

// 2. Assert element is not visible
Cypress.Commands.add('assertNotVisible', (selector) => {
  cy.get(selector).should('not.be.visible')
})

// 3. Assert element exists
Cypress.Commands.add('assertExists', (selector) => {
  cy.get(selector).should('exist')
})

// 4. Assert element does not exist
Cypress.Commands.add('assertNotExists', (selector) => {
  cy.get(selector).should('not.exist')
})

// 5. Assert element contains text
Cypress.Commands.add('assertContainsText', (selector, text) => {
  cy.get(selector).should('contain.text', text)
})

// 6. Assert element has exact text
Cypress.Commands.add('assertExactText', (selector, text) => {
  cy.get(selector).should('have.text', text)
})

// 7. Assert element has attribute with value
Cypress.Commands.add('assertAttr', (selector, attr, value) => {
  cy.get(selector).should('have.attr', attr, value)
})

// 8. Assert element has CSS property
Cypress.Commands.add('assertCss', (selector, cssProp, value) => {
  cy.get(selector).should('have.css', cssProp, value)
})

// 9. Assert element is enabled
Cypress.Commands.add('assertEnabled', (selector) => {
  cy.get(selector).should('be.enabled')
})

// 10. Assert element is disabled
Cypress.Commands.add('assertDisabled', (selector) => {
  cy.get(selector).should('be.disabled')
})

// 11. Assert element is checked
Cypress.Commands.add('assertChecked', (selector) => {
  cy.get(selector).should('be.checked')
})

// 12. Assert element is not checked
Cypress.Commands.add('assertNotChecked', (selector) => {
  cy.get(selector).should('not.be.checked')
})

// 13. Assert element has class
Cypress.Commands.add('assertHasClass', (selector, className) => {
  cy.get(selector).should('have.class', className)
})

// 14. Assert element does not have class
Cypress.Commands.add('assertNotHasClass', (selector, className) => {
  cy.get(selector).should('not.have.class', className)
})

// 15. Assert element count
Cypress.Commands.add('assertCount', (selector, count) => {
  cy.get(selector).should('have.length', count)
})

// 16. Assert element value
Cypress.Commands.add('assertValue', (selector, value) => {
  cy.get(selector).should('have.value', value)
})

// 17. Assert placeholder text
Cypress.Commands.add('assertPlaceholder', (selector, placeholder) => {
  cy.get(selector).should('have.attr', 'placeholder', placeholder)
})

// 18. Assert URL contains text
Cypress.Commands.add('assertUrlContains', (text) => {
  cy.url().should('include', text)
})

// 19. Assert Page Title
Cypress.Commands.add('assertTitle', (expectedTitle) => {
  cy.title().should('eq', expectedTitle)
})

// 20. Assert element is focused
Cypress.Commands.add('assertFocused', (selector) => {
  cy.get(selector).should('have.focus')
})
