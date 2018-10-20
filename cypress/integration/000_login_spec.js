// let myApp = 'http://localhost:3001/'
let myApp = 'http://localhost:3000/'
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

describe ('clicks on Sign Up in menu', function() {
  it("clicks on Sign Up in menu", function() {
    cy.visit(myApp)
    if (!cy.contains("Loading...")) { //NOTE: conditionally checking that page is done loading data via API calls before running test...
      cy.contains('Sign Up').click()
      cy.url().should('include', '/register')
    }
  })
})

describe ('clicks on Login in menu', function() {
  it("clicks on Login in menu", function() {
    cy.visit(myApp)
    if (!cy.contains("Loading...")) { //NOTE: conditionally checking that page is done loading data via API calls before running test...
      cy.contains('Login').click()
      cy.url().should('include', '/login')
    }
  })
})

describe ("clicks on 'Sign up now.' link from homepage", function() {
  it("clicks on 'Sign up now.' link from homepage", function() {
    cy.visit(myApp)
    // if ($body.text().includes('some string')) {
    //   // yup found it
    //   cy.get(...).should(...)
    // }
    if (!cy.contains("Loading...")) { //NOTE: conditionally checking that page is done loading data via API calls before running test...
      // yup found it
      // cy.get(...).should(...)

      // cy.get('.hoverYellow').contains('Sign up now.').click() //NOTE: .hoverYellow is nested within .call-to-action...
      // cy.get('.call-to-action').children().contains('Sign up now.').click()
      cy.contains("Sign up now.").click() //NOTE: trying to find text directly...
      cy.url().should('include', '/register')
    }
  })
})

describe ("clicks on 'Log in.' link from /register page", function() {
  it("clicks on 'Log in.' link from /register page", function() {
    // cy.visit('/register') //NOTE: using three below lines instead of this line...
    cy.visit(myApp)
    if (!cy.contains("Loading...")) { //NOTE: conditionally checking that page is done loading data via API calls before running test...
      cy.contains('Sign Up').click()
      cy.url().should('include', '/register')
      // cy.get('.hoverYellow').contains('Log in.').click() //NOTE: .hoverYellow is nested within .call-to-action...
      // cy.get('.call-to-action').contains('Log in.').click() //NOTE: this fails sometimes, maybe change to simply contains("Log in.") like above test.
      cy.contains("Log in.").click() //NOTE: trying to find text directly...
      cy.url().should('include', '/login')
    }
  })
})


describe ("enter username and login and submit form", function() {
  it("submits login form after entering username and password", function() {
    cy.visit(myApp)
    if (!cy.contains("Loading...")) { //NOTE: conditionally checking that page is done loading data via API calls before running test...
      cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
      .type('bob')
      cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
      .type('bob')
      cy.get('form').submit()
      cy.get('.header').should('contain', 'Create A Short Story')
    }
  })
})


describe ("user can't submit login form without entering username and password", function() {
  it('displays invalid name error', function() {
    cy.visit(myApp)
    if (!cy.contains("Loading...")) { //NOTE: conditionally checking that page is done loading data via API calls before running test...
      cy.contains('Login').click()
      cy.url().should('include', '/login')
      cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
      .type('oops').clear() // clear out username
      cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
      .type('oops').clear() // clear out password
      cy.get('form').submit()
      cy.get('.error').should('contain', 'invalid username')
    }
  })
})


describe ("user can't submit login form without entering valid username and password", function() {
  it('displays usernameOrPasswordError when user does not exist', function() {
    cy.visit(myApp)
    if (!cy.contains("Loading...")) { //NOTE: conditionally checking that page is done loading data via API calls before running test...
      cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
      .type('wrong username')
      cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
      .type('wrong password')
      cy.get('form').submit()
      cy.get('.usernameOrPasswordError').should('contain', 'Incorrect Username or Password.')
    }
  })
})

describe ("user can't submit login form without entering valid password for specific username", function() {
  it('displays usernameOrPasswordError error when user enters wrong password', function() {
    cy.visit(myApp)
    if (!cy.contains("Loading...")) { //NOTE: conditionally checking that page is done loading data via API calls before running test...
      cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
      .type('sammy')
      cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
      .type('bob')
      cy.get('form').submit()
      cy.get('.usernameOrPasswordError').should('contain', 'Incorrect Username or Password.')
    }
  })
})
