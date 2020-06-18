class ChannelDetailsPanel {
  // this file will contain all the POM elements to interact with the Channel Details Page
  btnAddUser() {
    return cy.get('[data-qa="add-user"]');
  }

  btnMoreDetails() {
    return cy.get('[data-qa="channel-details-action"]');
  }

  lstChannelDetailsSections() {
    return cy.get('[data-qa="channel-details-section-title"] span');
  }

  lstChannelMemberList() {
    return cy.get('[data-qa="member-entity__primary-name"]');
  }

  lstMoreDetailsMenu() {
    return cy.get('[data-qa="menu_item_button"] div');
  }

  checkIfUserIsAMember(incommingUserName, callback) {
    this.clickOnSection('Members');
    this.lstChannelMemberList().each((member) => {
      if (member.text() === incommingUserName) {
        callback(true);
      }
    });
  }

  leaveChannel() {
    this.btnMoreDetails().click();
    this.clickOnMoreDetailsMenuOption('Leave #');
  }

  openChannelAdditionalOptionsModal() {
    this.btnMoreDetails().click();
    this.clickOnMoreDetailsMenuOption('Additional options');
  }

  openAddUserModal() {
    this.btnAddUser().click();
  }

  clickOnSection(incommingSectionName) {
    this.lstChannelDetailsSections()
      .contains(incommingSectionName)
      .click();
  }

  clickOnMoreDetailsMenuOption(incommingMenuOption) {
    this.lstMoreDetailsMenu()
      .contains(incommingMenuOption)
      .click();
  }
}
export default ChannelDetailsPanel;
