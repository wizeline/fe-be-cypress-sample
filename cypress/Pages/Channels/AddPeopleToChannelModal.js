class AddPeopleToChannelModal {
  lblChannelName() {
    return cy.get('[role="dialog"] [data-qa="inline_channel_entity__name"]');
  }

  btnCloseModal() {
    return cy.get('[data-qa="sk_close_modal_button"]');
  }

  btnDone() {
    return cy.get('[data-qa="invite_to_workspace_submit_button"]');
  }

  rdioAddSpecificPeople() {
    return cy.get('[data-qa="add-specific-members-option"]');
  }

  txtFindUserName() {
    return cy.get('[data-qa="invite_to_workspace_select-input"]');
  }

  lstSearchResult() {
    return cy.get('[data-qa="member-entity__primary-name"]');
  }

  closeAddPeopleToChannelModal() {
    this.btnCloseModal().click();
  }

  getChannelName(callback) {
    this.lblChannelName().then((selector) => {
      callback(selector.text());
    });
  }

  addUserToChannel(incommingUserName) {
    // this.rdioAddSpecificPeople().click();
    this.txtFindUserName().type(incommingUserName);
    this.lstSearchResult().each((user) => {
      if (user.text() === incommingUserName) {
        cy.wrap(user).click();
      }
    });
    this.btnDone().click();
  }
}
export default AddPeopleToChannelModal;
