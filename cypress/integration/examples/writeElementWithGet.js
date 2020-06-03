describe('Formas de encontrar un elemento', function() {
    it('Search bar', function() {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.search_query.form-control.ac_input').type('Hi') //By class
        cy.get('#search_query_top').type('First test') //By id
        cy.get('[name=search_query]').type('Test 2') //By name
        cy.get('[placeholder=Search]').clear() //By class
    })
});
