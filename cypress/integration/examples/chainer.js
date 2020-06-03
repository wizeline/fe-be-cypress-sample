describe('Write too many strings', function() {
    it('Write & clear', function() {
        cy.visit('http://automationpractice.com/index.php')
        .get('#search_query_top')
        .clear()
        .type('First test')
        .clear()
        .type('Second test')
    })
});
