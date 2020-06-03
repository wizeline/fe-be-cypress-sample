describe('Search test cases', function() {
    before(function() {
        cy.log('Executing before tests...')
    })
    after(function() {
        cy.log('Executing after tests...')
    })
    beforeEach(function() {
        cy.visit('http://automationpractice.com/index.php');
    })
    afterEach(function() {
        cy.log('Rollback')
    })
    it('Search dresses', function() {
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('dress');
    })
    it('Search hats', function() {
        cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('hat');
    })
});
