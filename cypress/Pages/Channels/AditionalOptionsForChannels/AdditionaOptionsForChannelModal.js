class AdditionaOptionsForChannelModal {
  btnDeleteChannelButton() {
    return cy.get('[data-qa="delete"]');
  }

  clickOnDeleteChannel() {
    this.btnDeleteChannelButton().click();
  }
}
export default AdditionaOptionsForChannelModal;
