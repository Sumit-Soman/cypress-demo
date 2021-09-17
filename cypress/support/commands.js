import login from '../pages/login'

Cypress.Commands.add('login', (username, password) => {
    cy.get(login.emailTxt).type(username)
    cy.get(login.passwordTxt).type(password   )
    cy.get(login.signInBtn).should('have.text', 'Sign in').click()
})
  