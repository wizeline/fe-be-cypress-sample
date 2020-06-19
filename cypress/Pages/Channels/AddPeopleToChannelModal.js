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

  btnSkipForNow() {
    return cy.get('[data-qa="invite_to_workspace_skip_button"]');
  }

  rdioAddSpecificPeople() {
    return cy.get('[data-qa="add-specific-members-option"]');
  }

  txtFindUserName() {
    return cy.get('[data-qa="invite_to_workspace_select-input"]').clear();
  }

  lstSearchResult() {
    return cy.get('[data-qa="member-entity__primary-name"]');
  }

  closeAddPeopleToChannelModal() {
    this.txtFindUserName().click();
    this.btnSkipForNow().click();
  }

  getChannelName(callback) {
    this.lblChannelName().then((selector) => {
      callback(selector.text());
    });
  }

  addUserToChannel(incommingUserName) {
    this.txtFindUserName().type(incommingUserName);
    this.lstSearchResult()
      .contains(incommingUserName)
      .click();
    this.btnDone().click();
  }
}
export default AddPeopleToChannelModal;
