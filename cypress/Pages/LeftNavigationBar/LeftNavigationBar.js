class LeftNavigationBar {
  btnAddChannel() {
    return cy.get('[data-qa="channel_sidebar_name_add_channel"]');
  }

  addChannelSubMenuOption() {
    return cy.get('[data-qa="channel_menu_item_create-wrapper"]');
  }

  lstChannelNames() {
    return cy.get('[data-qa*="channel_sidebar_name"]');
  }

  openChannelBrowser() {
    this.btnAddChannel().click();
  }

  openChannel(incommingChannelName) {
    this.lstChannelNames()
      .contains(incommingChannelName)
      .click();
  }

  getAllChannelNames(callback) {
    this.lstChannelNames().each((channel) => {
      callback(channel.text());
    });
  }
}
export default LeftNavigationBar;
