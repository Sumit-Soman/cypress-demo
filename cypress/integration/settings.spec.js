import settings from '../pages/settings'
import {randomNumber} from '../support/utilities'

describe('Settings', () => {
    const info = {
        username: `test${randomNumber}`,
        bio: 'test bio',
        emailId: Cypress.env('email'),
        password: Cypress.env('password')
    }

    // create new user, move to settings using jwt
    before(() => {
        cy.signIn()
        cy.visit('/settings')
    })

    it('should successfully update all user info on settings', () => {
        settings
            .updateUserInfo(info)

        cy.url().should('eq', `${Cypress.config('baseUrl')}/@${username}`)
        cy.get(settings.savedBio).should('be.visible')
            .and('have.text', 'update settings')
    })

    it('should successfully update profile logo', () => {
        const logoLink = 'https://c.tenor.com/VVOA7SCKgmkAAAAM/test.gif'
        settings
            .updateLogo(logoLink)
            .submit()

        cy.get(settings.image)
            .should('have.attr', 'src', logoLink)
            .and('be.visible')
            .and('have.css', 'height', '100px')
            .and('have.css', 'width', '100px')
    })

    it('should throw error message when fields are empty', () => {
        settings
            .clearFields()
            .submit()

        cy.get(settings.errorMessages).should('be.visible')
            .and('contain', 'email can\'t be blank')
            .and('contain', 'username can\'t be blank')
            .and('contain', 'username is too short')
    })

    it('should have logout button visible on settings page', () => {
        cy.get(settings.logoutButton)
            .should('be.visible')
    })
})
