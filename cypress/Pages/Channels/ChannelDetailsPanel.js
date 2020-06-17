class ChannelDetailsPanel {
  // this file will contain all the POM elements to interact with the Channel Details Page
  btnAddUser() {
    return cy.get('[data-qa="add-user"]');
  }

  lstChannelDetailsSections() {
    return cy.get('[data-qa="channel-details-section-title"] span');
  }

  lstChannelMemberList() {
    return cy.get('[data-qa="member-entity__primary-name"]');
  }

  openAddUserModal() {
    this.btnAddUser().click();
  }

  clickOnSection(incommingSectionName) {
    this.lstChannelDetailsSections().each((section) => {
      if (section.text() === incommingSectionName) {
        section.click();
      }
    });
  }

  checkIfUserIsAMember(incommingUserName, callback) {
    this.clickOnSection('Members');
    this.lstChannelMemberList().each((member) => {
      if (member.text() === incommingUserName) {
        callback(true);
      }
    });
  }
}
export default ChannelDetailsPanel;
