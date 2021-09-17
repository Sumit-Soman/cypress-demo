import login from '../pages/login'
import header from '../pages/header'

describe('Login Scenarios', () => {
    // login login page
    beforeEach(() => {
        login
            .open()
    })

    context('Scenarios: Valid user successfull login', () => {
        it('should be able to log in successfully', function () {
            cy.login(Cypress.env('email'), Cypress.env('password'))
            cy.get(header.settingsLink).should('be.visible')
        })
    })

    context('Scenarios: Invalid user unsuccessful login attempt', () => {
        const invalidEmailId = 'invalid@test.com'
        const pwd = 'invalid'
        it('should see validation error message with invalid credentials', () => {
            cy.login(invalidEmailId, pwd)
            cy.get(login.errorMessages).should('be.visible')
                .and('contain', 'email or password is invalid')
        })

        it('should see validation error message for incorrect email format', () => {
            cy.login('test.com', pwd)
            cy.get('input:invalid').should('have.length', 1)
            cy.get(login.emailTxt)
                .then($el => $el[0].checkValidity()).should('be.false')
        })

        it('should see validation error message for incorrect email format- 2', () => {
            cy.login('test@t', pwd)
            cy.get('input:invalid').should('have.length', 1)
            cy.get(login.emailTxt)
                .then($el => $el[0].checkValidity()).should('be.false')
        })

        it('should see validation error message for incorrect email format- 3', () => {
            cy.login('test@.com', pwd)
            cy.get('input:invalid').should('have.length', 1)
            cy.get(login.emailTxt)
                .then($el => $el[0].checkValidity()).should('be.false')
        })

        it('should see error message when username and password fields are empty', () => {
            cy.get(login.signInBtn).click()
            cy.get(login.errorMessages).should('be.visible')
                .and('contain', 'email or password is invalid')
        })

        it('should see error message when username field is empty', () => {
            cy.login('', pwd)
            cy.get(login.errorMessages).should('be.visible')
                .and('contain', 'email or password is invalid')
        })

        it('should see error message when password field is empty', () => {
            cy.login('test.com', '')
            cy.get(login.errorMessages).should('be.visible')
                .and('contain', 'email or password is invalid')
        })

        it('should see error message when API responds with 500', () => {
            // incept login call to return status code as 500
            cy.loginInterceptWith500();

            cy.login(invalidEmailId, pwd)

            cy.get(login.errorMessages).should('be.visible')
                .and('contain', 'Error 500 - Internal server error')
        })
    })
})
