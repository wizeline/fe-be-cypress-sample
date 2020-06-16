class LeftNavigationBar {
  btnAddChannel() {
    return cy.get('[data-qa="channel_sidebar__plus__channels"]');
  }

  addChannelSubMenuOption() {
    return cy.get('[data-qa="channel_menu_item_create-wrapper"]');
  }

  openCreateChannelFromChannelSubMenu() {
    this.btnAddChannel().click();
    this.addChannelSubMenuOption().click();
  }
}
export default LeftNavigationBar;
