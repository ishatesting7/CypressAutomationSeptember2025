class ParabankForgotPassword {
    elements = {
        forgotPasswordLink: () => cy.get('[href="lookup.htm"]',{force:true}),
        firstNameInput: () => cy.get('input[name="firstName"]'),
        lastNameInput: () => cy.get('input[name="lastName"]'),
        addressInput: () => cy.get('input[name="address.street"]'),
        cityInput: () => cy.get('input[name="address.city"]'),
        stateInput: () => cy.get('input[name="address.state"]'),
        zipCodeInput: () => cy.get('input[name="address.zipCode"]'),
        ssnInput: () => cy.get('input[name="ssn"]'),  
        forgetBtn:() => cy.get('input[value="Find My Login Info"]')  
    }

    clickForgotPasswordLink() {
        this.elements.forgotPasswordLink().click();
    }
    enterDetailsForForgotPassword()
    {
        this.elements.firstNameInput().type('John');
        this.elements.lastNameInput().type('Doe');
        this.elements.addressInput().type('123 Main St');
        this.elements.cityInput().type('Anytown');
        this.elements.stateInput().type('CA');
        this.elements.zipCodeInput().type('12345');
        this.elements.ssnInput().type('123456789');
    }

}
export default new ParabankForgotPassword();