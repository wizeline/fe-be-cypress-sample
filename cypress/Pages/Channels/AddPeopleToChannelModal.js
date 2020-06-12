class AddPeopleToChannelModal {
  lblChannelName() {
    return cy.get('[role="dialog"] [data-qa="inline_channel_entity__name"]');
  }

  btnCloseModal() {
    return cy.get('[data-qa="sk_close_modal_button"]');
  }

  closeAddPeopleToChannelModal() {
    this.btnCloseModal().click();
  }

  getChannelName(callback) {
    this.lblChannelName().then((selector) => {
      callback(selector.text());
    });
  }
}
export default AddPeopleToChannelModal;
