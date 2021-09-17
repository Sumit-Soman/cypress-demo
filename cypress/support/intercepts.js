Cypress.Commands.add('loginInterceptWith500', () => {
    cy.intercept('POST', `${Cypress.env('apiUrl')}/users/login`, {
        statusCode: 500,
        fixture: 'login_error'
    })
})
  