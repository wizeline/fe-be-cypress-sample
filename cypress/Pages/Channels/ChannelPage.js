class ChannelPage {
  // This file will hold all the POM elements for a Channel's page
  txtMessageInput() {
    return cy.get('[data-team-id="T015A1WC8V7"]').clear(); // Cleans and returns the text field to be ready to use.
  }

  btnChannelDetails() {
    return cy.get('[data-qa="channel-details"]');
  }

  btnSendMessageButton() {
    return cy.get('[data-qa="texty_send_button"]');
  }

  btnJoinChannelButton() {
    return cy.get('[data-qa="message-pane-input-preview-join-channel"]');
  }

  lblChannelName() {
    return cy.get('[data-qa="channel_name"]');
  }

  lblLastMessage() {
    return cy.get('[data-qa="block-kit-renderer"]').last();
  }

  sendMessage(message) {
    this.txtMessageInput().type(message);
    this.btnSendMessageButton().click();
  }

  getLastMessage(callback) {
    this.lblLastMessage().then((selector) => {
      callback(selector.text());
    });
  }

  openChannelDetailsPanel() {
    this.btnChannelDetails()
      .invoke('attr', 'aria-expanded')
      .then((opened) => {
        if (opened === 'false') {
          this.btnChannelDetails().click();
        }
      });
  }

  closeChannelDetailsPanel() {
    this.btnChannelDetails()
      .invoke('attr', 'aria-expanded')
      .then((opened) => {
        if (opened === 'true') {
          this.btnChannelDetails().click();
        }
      });
  }

  getCurrentChannelName(callback) {
    this.lblChannelName().then((selector) => {
      callback(selector.text());
    });
  }

  clickOnJoinChannelButton() {
    this.btnJoinChannelButton().click();
  }
}
export default ChannelPage;
