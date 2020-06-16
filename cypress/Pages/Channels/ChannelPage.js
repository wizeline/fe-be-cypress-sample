class ChannelPage {
  // This file will hold all the POM elements for a Channel's page
  btnChannelDetails() {
    return cy.get('[data-qa="channel-details"]');
  }

  openChannelDetails() {
    this.btnChannelDetails().click();
  }
}
export default ChannelPage;
