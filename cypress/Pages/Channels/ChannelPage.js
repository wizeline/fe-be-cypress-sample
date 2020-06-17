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

  inputMessageContent() {
    return cy.get('.p-rich_text_section');
  }

  sendMessage(message) {
    this.txtMessageInput().type(message);
    this.btnSendMessageButton().click();
  }

  getMessageSent(callback) {
    this.inputMessageContent().then((selector) => {
      callback(selector.text());
    });
  }

  openChannelDetails() {
    this.btnChannelDetails()
      .invoke('attr', 'aria-expanded')
      .then((opened) => {
        if (opened === 'false') {
          this.btnChannelDetails().click();
        }
      });
  }
}
export default ChannelPage;
