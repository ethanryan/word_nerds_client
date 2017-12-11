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
  it('displays form validation', function() {
    cy.visit(myApp)
    cy.contains('Sign Up').click()
    cy.url().should('include', '/register')

    cy.get('#emailAddressInput').should('have.attr', 'placeholder', 'Email Address')
    .type('wrong')

    cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
    .type('wrong')

    cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
    .type('wrong')

    cy.get('form').submit()
    cy.get('.error').should('contain', 'invalid email')
  })
})


// describe ("user can't submit signup form without entering valid email_address, username, and password", function() {
//   it('displays form validation', function() {
//     cy.visit(myApp)
//     cy.get('.hoverYellow').contains('Sign Up').click()
//     cy.url().should('include', '/register')
//
//     cy.get('input:first').should('have.attr', 'placeholder', 'Email Address')
//     .type('wrong')
//     //input:first ??
//     cy.get('input:first').should('have.attr', 'placeholder', 'Username')
//     .type('wrong')
//     cy.get('input:last').should('have.attr', 'placeholder', 'Password')
//     .type('wrong')
//
//     cy.get('form').submit()
//     cy.get('.nameOrPasswordError').should('contain', 'Incorrect Username or Password.')
//   })
// })

// describe ("user can't submit signup form without entering unique username", function() {
//   it('displays form validation', function() {
//     cy.visit(myApp)
//     cy.get('.hoverYellow').contains('Sign Up').click()
//     cy.url().should('include', '/register')
//     cy.get('input:first').should('have.attr', 'placeholder', 'Username')
//     .type('bob')
//     cy.get('form').submit()
//     cy.get('.nameOrPasswordError').should('contain', 'Username already taken.')
//   })
// })
