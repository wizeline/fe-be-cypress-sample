class TopSearchBar {
  txtSearch() {
    return cy
      .get('[data-qa="focusable_search_input"] [role="textbox"]')
      .clear();
  }

  lstUsersSearchResults() {
    return cy.get(
      '[data-qa="search_autocomplete"] [data-qa="member-entity__primary-name"]',
    );
  }

  lstChannelSearchResults() {
    return cy.get('[data-type="channel-navigation"]');
  }

  btnTopNavigationSearch() {
    return cy.get('[data-qa="top_nav_search"]');
  }

  findAndOpenChannel(incommingChannelName) {
    this.btnTopNavigationSearch().click();
    this.txtSearch().type(incommingChannelName);
    this.lstChannelSearchResults()
      .contains(incommingChannelName)
      .click();
  }

  findUserAndOpenChatWindow(incommingUserName) {
    this.lstUsersSearchResults()
      .contains(incommingUserName)
      .click();
  }
}
export default TopSearchBar;
