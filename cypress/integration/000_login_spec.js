let myApp = 'http://localhost:3001/'
// // let myApp = 'https://word-nerds-client.herokuapp.com/'

describe ('visit app', function() {
  it("visits my app", function() {
    cy.visit(myApp)
  })
})

describe ('check for the words on homepage', function() {
  it("checks for text, Word Nerds", function() {
    cy.visit(myApp)
    cy.contains("Word Nerds")
  })
})

describe ('clicks on Sign Up', function() {
  it("clicks on Sign Up", function() {
    cy.visit(myApp)
    cy.contains('Sign Up').click()
    cy.url().should('include', '/register')
  })
})

describe ('clicks on Login', function() {
  it("clicks on Login", function() {
    cy.visit(myApp)
    cy.contains('Login').click()
    cy.url().should('include', '/login')
  })
})

describe ("clicks on 'Sign Up' in Login | Sign Up", function() {
  it("clicks on 'Sign Up' in Login | Sign Up", function() {
    cy.visit(myApp)
    cy.get('.hoverYellow').contains('Sign Up').click()
    cy.url().should('include', '/register')
  })
})

describe ("clicks on 'Login' in Login | Sign Up", function() {
  it("clicks on 'Login' in Login | Sign Up", function() {
    cy.visit(myApp)
    cy.get('.hoverYellow').contains('Login').click()
    cy.url().should('include', '/login')
  })
})


describe ("enter username and login and submit form", function() {
  it("submits login form after entering username and password", function() {
    cy.visit(myApp)
    cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
    .type('bob')
    cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
    .type('bob')
    cy.get('form').submit()
    cy.get('.header').should('contain', 'Create a Short Story')
  })
})


describe ("user can't submit login form without entering username and password", function() {
  it('displays invalid name error', function() {
    cy.visit(myApp)
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
    .type('oops').clear() // clear out username
    cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
    .type('oops').clear() // clear out password
    cy.get('form').submit()
    cy.get('.error').should('contain', 'invalid name')
  })
})


describe ("user can't submit login form without entering valid username and password", function() {
  it('displays nameOrPasswordError when user does not exist', function() {
    cy.visit(myApp)
    cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
    .type('wrong username')
    cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
    .type('wrong password')
    cy.get('form').submit()
    cy.get('.nameOrPasswordError').should('contain', 'Incorrect Username or Password.')
  })
})

describe ("user can't submit login form without entering valid password for specific username", function() {
  it('displays nameOrPasswordError error when user enters wrong password', function() {
    cy.visit(myApp)
    cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
    .type('sammy')
    cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
    .type('bob')
    cy.get('form').submit()
    cy.get('.nameOrPasswordError').should('contain', 'Incorrect Username or Password.')
  })
})
