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


//this is an unstubbed test, a true end-to-end test, dealing with the actual server response, which may be slower, and show "Loading..."
describe ("check for the words 'Log in to Word Nerds' on homepage", function() {
  it("checks for text, 'Log in to Word Nerds', on the homepage", function() {
    cy.visit(myApp)
    cy.contains("Log in to Word Nerds")
  })
})

//this is a stubbed test, mimicking data received from the backend...
describe ("check for the words 'Log in to Word Nerds' on homepage", function() {
  it("checks for text, 'Log in to Word Nerds', on the homepage", function() {
    cy.server() //this is a stubbed test...
    cy.route('activities/*', 'fixture:activities').as('getActivities') //wtf is this shit
    // cy.fixture('homepage').as('homepage') //wtf am i doing
    cy.visit(myApp)
    cy.contains("Log in to Word Nerds")
  })
})

describe ("check for the words 'Log in to Word Nerds' on homepage", function() {
  it("checks for text, 'Log in to Word Nerds', on the homepage", function() {
    cy.server() //this is a stubbed test...
    cy.visit(myApp)
    cy.contains("Log in to Word Nerds")
  })
})

//NOTE: unstubbed, using actual server...
describe ("user can't submit login form without entering valid password for specific username", function() {
  it('displays usernameOrPasswordError error when user enters wrong password', function() {
    cy.visit(myApp)
      cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
      .type('sammy')
      cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
      .type('bob')
      cy.get('form').submit()
      cy.get('.usernameOrPasswordError').should('contain', 'Incorrect Username or Password.')
  })
})

//NOTE: stubbed, using cypress server...
describe ("user can't submit login form without entering valid password for specific username", function() {
  it('displays usernameOrPasswordError error when user enters wrong password', function() {
    cy.server() //this is a stubbed test...
    cy.visit(myApp)
    cy.get('#usernameInput').should('have.attr', 'placeholder', 'Username')
    .type('sammy')
    cy.get('#passwordInput').should('have.attr', 'placeholder', 'Password')
    .type('bob')
    cy.get('form').submit()
    cy.get('.usernameOrPasswordError').should('contain', 'Incorrect Username or Password.')
  })
})
