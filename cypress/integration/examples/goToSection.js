describe('Go to different sections', function() {
    beforeEach(function() {
        cy.visit('http://automationpractice.com/index.php');
    })
    it('go to women section', function() {
        cy.get('[class=sf-with-ul]').first().click();
    })
    it('Go to dresses section', function() {
        cy.get('[class=sf-with-ul]').eq(3).click();
    })

});
