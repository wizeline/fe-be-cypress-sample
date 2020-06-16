class LeftNavigationBar {
  btnAddChannel() {
    return cy.get('[data-qa="channel_sidebar__plus__channels"]');
  }

  addChannelSubMenuOption() {
    return cy.get('[data-qa="channel_menu_item_create-wrapper"]');
  }

  lstChannelNames() {
    return cy.get('[data-qa*="channel_sidebar_name"]');
  }

  openCreateChannelFromChannelSubMenu() {
    this.btnAddChannel().click();
    this.addChannelSubMenuOption().click();
  }

  openChannel(incommingChannelName) {
    this.lstChannelNames().each((channel) => {
      if (channel.text() === incommingChannelName) {
        channel.click();
      }
    });
  }
}
export default LeftNavigationBar;
