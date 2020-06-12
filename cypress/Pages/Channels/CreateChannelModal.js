class CreateChannelModal {
  // Extending the Left Navigation Bar so it's ready to be used when needing the Modal

  txtChannelName() {
    return cy.get('[data-qa="channel-name-input"]').clear();
  } // Clears the field

  txtChannelDescription() {
    return cy.get('[data-qa="channel_create_modal_purpose"] p').clear();
  } // Clears the field

  btnCreateChannel() {
    return cy.get('[data-qa="channel_create_modal_cta"]');
  }

  createNewChannel(incommingChannelName, incommingChannelDescription = 'Default: Created by Automation') {
    this.txtChannelName().type(incommingChannelName, { force: true });
    this.txtChannelDescription().type(incommingChannelDescription);
    this.btnCreateChannel().click();
  }
}
export default CreateChannelModal;
