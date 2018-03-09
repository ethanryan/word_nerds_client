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

  })
})
