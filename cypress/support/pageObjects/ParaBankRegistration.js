const { faker } = require('@faker-js/faker');

class ParaBankRegistrationPage{
    elements = {
        firstNameInput: () => cy.get('input[name="customer.firstName"]'),
        lastNameInput: () => cy.get('input[name="customer.lastName"]'),
        addressInput: () => cy.get('input[name="customer.address.street"]'),
        cityInput: () => cy.get('input[name="customer.address.city"]'),
        stateInput: () => cy.get('input[name="customer.address.state"]'),
        zipCodeInput: () => cy.get('input[name="customer.address.zipCode"]'),
        phoneInput: () => cy.get('input[name="customer.phoneNumber"]'),
        ssnInput: () => cy.get('input[name="customer.ssn"]'),
        usernameInput: () => cy.get('input[name="customer.username"]'),
        passwordInput: () => cy.get('input[name="customer.password"]'),
        confirmPasswordInput: () => cy.get('input[name="repeatedPassword"]'),
        registerButton: () => cy.get('input[value="Register"]'),
        successMessage: () => cy.get('#rightPanel > p'), // Adjust selector as needed
    }

    enterCompleteRegistrationDetails(){
        this.elements.firstNameInput().type('John');
        this.elements.lastNameInput().type('Doe');
        this.elements.addressInput().type('123 Main St');
        this.elements.cityInput().type('Anytown');
        this.elements.stateInput().type('CA');
        this.elements.zipCodeInput().type('12345');
        this.elements.phoneInput().type('555-1234');
        this.elements.ssnInput().type('123-45-6789');
        const uniqueUsername = `user${Date.now()}`; // Ensure unique username
        this.elements.usernameInput().type(uniqueUsername);
        this.elements.passwordInput().type('Password123!');
        this.elements.confirmPasswordInput().type('Password123!');
    }

    enterCompleteRegistrationDetailsWithFaker(){
        this.elements.firstNameInput().type(faker.person.firstName());
        this.elements.lastNameInput().type(faker.person.lastName());
        this.elements.addressInput().type(faker.location.streetAddress());
        this.elements.cityInput().type(faker.location.city());
        this.elements.stateInput().type(faker.location.state());
        this.elements.zipCodeInput().type("34893");
        this.elements.phoneInput().type(faker.phone.number('2139019291'));
        this.elements.ssnInput().type(faker.string.numeric(9));
        const uniqueUsername = `user_${Date.now()}`; // Ensure unique username
        this.elements.usernameInput().type(uniqueUsername);
        const password = faker.internet.password(12, false, /[A-Za-z0-9]/, '!@#');
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(password);
    }
    //generate random firstname without using faker
    // generateRandomFirstName(length) {
    //     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    //     let result = '';
    //     const charactersLength = characters.length;
    //     for (let i = 0; i < length; i++) {
    //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     }
    //     return result;
    // }
    clickRegisterBtn(){
        this.elements.registerButton().click();
    }

}
export default new ParaBankRegistrationPage();

        
