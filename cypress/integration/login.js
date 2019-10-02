// @flow

const getByTestId = id => `[data-testid="${id}"]`

describe('login flow', () => {
  it('should be possible to login', () => {
    const email = 'hello@world.com'
    // 1. visit http://localhost:3000
    cy.visit('http://localhost:3000')
    // 2. input email and password
    cy.get(getByTestId('email-input')).type(email, {
      delay: 100,
    })

    cy.get(getByTestId('password-input')).type(
      'jasglkj383y89ijiu8sk',
      {
        delay: 100,
      },
    )
    // 3. submit the form
    cy.get(getByTestId('login-button')).click()
    // 4. verify greeting
    cy.get(getByTestId('greeting')).contains(email)

    cy.window()
      .its('localStorage.token')
      .should('exist')
  })
})
