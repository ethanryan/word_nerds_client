let myApp = 'http://localhost:3001/'

describe ("sign in, create, read, edit, sign out", function() {

  it("signs in, creates, reads, edits, and logs out", function() {
    cy.visit(myApp)
    cy.get('input:first').should('have.attr', 'placeholder', 'Username')
    .type('bob')
    cy.get('input:last').should('have.attr', 'placeholder', 'Password')
    .type('bob')
    cy.get('form').submit()

    cy.get('.header').should('contain', 'Create a Short Story')
    cy.get('input:first').should('have.attr', 'placeholder', 'HERO')
    .type('Superman')
    cy.get('.primary').click()

    cy.get('.green').should('contain', 'View')
    cy.contains('View').click() //click first element containing 'View'

    cy.get('input:first').clear()
    .type('new title here for Superman story')
    cy.get('.primary').should('contain', 'Save Story')
    cy.get('.primary').click()

    cy.get('.image').scrollIntoView().should('be.visible')
    cy.contains('Logout').click()

    cy.contains("Word Nerds")

    })
})










// let myApp = 'http://localhost:3001/'
//
// describe ("sign in, create, read, edit, sign out", function() {
//
//   it("submits login form after entering username and password", function() {
//     cy.visit(myApp)
//     cy.get('input:first').should('have.attr', 'placeholder', 'Username')
//     .type('bob')
//     cy.get('input:last').should('have.attr', 'placeholder', 'Password')
//     .type('bob')
//     cy.get('form').submit()
//   })
//
//   it("submits createStory form after entering hero's name", function() {
//     cy.get('.header').should('contain', 'Create a Story')
//     cy.get('input:first').should('have.attr', 'placeholder', 'HERO')
//     .type('Superman')
//     cy.get('.primary').click()
//   })
//
//   it("clicks on first story on index page", function() {
//     // cy.get('.center').should('contain', 'stories')
//     // cy.get('.AllStories-green').should('contain', '.OneStory-orange')
//     // cy.get('.green').should('contain', 'View')
//     cy.get('.green', { timeout: 5000 })
//
//     cy.contains('View').click() //click first element containing 'View'
//   })
//
//   it("submits editStory form after editing story title", function() {
//     cy.get('input:first').clear()
//     .type('new title here for Superman story')
//     cy.get('.primary').should('contain', 'Save Story')
//     .click()
//   })
//
//   it("views storyShow page, then logs out", function() {
//     cy.get('.image').scrollIntoView().should('be.visible')
//     cy.contains('Logout').click()
//   })
//
//   it("returns to homepage for signing in", function() {
//     cy.contains("Word Nerds")
//   })
//
// })
