//
describe ('myFirstTest', function() {
  it("doesn't do much", function() {
    expect(true).to.equal(true)
  })
})
//
let myApp = 'http://localhost:3003/'
// // let myApp = 'https://word-nerds-client.herokuapp.com/'

describe ('visit app', function() {
  it("visits my app", function() {
    cy.visit(myApp)
  })
})

describe ('check for the words', function() {
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
    cy.get('input:first').should('have.attr', 'placeholder', 'Username')
    .type('bob')
    cy.get('input:last').should('have.attr', 'placeholder', 'Password')
    .type('bob')
    cy.get('form').submit()
  })
})


describe ("user can't submit login form without entering username and password", function() {
  it('displays form validation', function() {
    cy.visit(myApp)
    cy.contains('Login').click()
    cy.url().should('include', '/login')
    // cy.get('input:first').should('have.attr', 'placeholder', 'Username')
    // .type('gonna delete all these words in a second')
    cy.get('input:first').clear() // clear out username
    cy.get('form').submit()
    cy.get('#errors').should('contain', 'Username is required')
  })
})















////
