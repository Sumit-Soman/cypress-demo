class Login {
    get emailTxt() { return '[placeholder=Email]'}
    get passwordTxt() { return '[placeholder=Password]'}
    get signInBtn() { return '.btn'}
    get errorMessages() {return '.error-messages li'}

    open() {
        cy.visit('/login')
    }
}

export default new Login;
