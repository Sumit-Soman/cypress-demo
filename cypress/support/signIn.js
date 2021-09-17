import {randomNumber} from './utilities'

Cypress.Commands.add('signIn', () => {
    const apiUrl = Cypress.env('apiUrl')
    const username = `test${randomNumber}`
    const email = `abc${randomNumber}@test.com`
    const password = Cypress.env('password')

    /**
     * create user using /users service
     */
    cy.request({
        url: `${apiUrl}/users`,
        method: 'POST',
        body: {
            user: {
                username: username,
                email: email,
                password: password
            }
        }
    })
        .then((response) => {
            expect(response.status).to.eq(200)
            cy.log('**user created**')
            cy.log(`**email: ${email}**`)
            cy.log(`**password: ${password}**`)
        })
        .then((response) => {
            // login using jwt retrieved
            window.localStorage.setItem('jwtToken', response.body.user.token)

            return {
                email: email,
                username: username
            }
        })
})
