let myApp = 'http://localhost:3001/'
// // let myApp = 'https://word-nerds-client.herokuapp.com/'


describe ('clicks on Sign Up', function() {
  it("clicks on Sign Up", function() {
    cy.visit(myApp)
    cy.contains('Sign Up').click()
    cy.url().should('include', '/register')
  })
})


describe ("clicks on 'Sign Up' in Login | Sign Up", function() {
  it("clicks on 'Sign Up' in Login | Sign Up", function() {
    cy.visit(myApp)
    cy.get('.hoverYellow').contains('Sign Up').click()
    cy.url().should('include', '/register')
  })
})


describe ("user can't submit signup form without entering email_address, username, and password", function() {
  it('displays errors when input fields are empty', function() {
    cy.visit(myApp)
    cy.contains('Sign Up').click()
    cy.url().should('include', '/register')

    cy.get('#emailAddressInput').should('have.attr', 'placeholder', 'Email Address')
    .type('wrong').clear()

    cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
    .type('wrong').clear()

    cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
    .type('wrong').clear()

    cy.get('.error').should('contain', 'invalid email')
  })
})


describe ("user can't submit signup form without entering unique username", function() {
  it('displays errors when username is not unique', function() {
    cy.visit(myApp)
    cy.get('.hoverYellow').contains('Sign Up').click()
    cy.url().should('include', '/register')

    cy.get('#emailAddressInput').should('have.attr', 'placeholder', 'Email Address')
    .type('bob')

    cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
    .type('bob')

    cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
    .type('wrong')

    cy.get('form').submit()
    cy.get('.usernameExistsError').should('contain', 'Username already taken. Must have unique username.')
  })
})
