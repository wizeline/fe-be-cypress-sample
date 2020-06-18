class DeleteChannelSubModal {
  chkConfirmDeletion() {
    return cy.get('#delete_channel_cb');
  }

  btnDeleteChannel() {
    return cy.get('[data-qa="create_action"]');
  }

  deleteChannel() {
    this.chkConfirmDeletion().check();
    this.btnDeleteChannel().click();
  }
}
export default DeleteChannelSubModal;
