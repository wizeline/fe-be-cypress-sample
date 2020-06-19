class ChannelBrowser {
  btnCreateChannel() {
    return cy.get('[data-qa="channel_browser_channel_create_btn"]');
  }

  openCreateChannelModal() {
    this.btnCreateChannel().click();
  }
}
export default ChannelBrowser;
