import LoginPage from '../../Pages/Login/LoginPage';
import LeftNavigationBar from '../../Pages/LeftNavigationBar/LeftNavigationBar';
import CreateChannelModal from '../../Pages/Channels/CreateChannelModal';
import AddPeopleToChannelModal from '../../Pages/Channels/AddPeopleToChannelModal';
import ChannelPage from '../../Pages/Channels/ChannelPage';
import ChannelDetailsPanel from '../../Pages/Channels/ChannelDetailsPanel';
import {
  SLACK_URL,
  LOGIN_USERNAME,
  LOGIN_PASSWORD,
} from '../../Utils/Constants';

describe('Test Cases regarding the Channel Functionality', () => {
  let channelName;
  const userName = 'test';

  beforeEach(() => {
    cy.visit(SLACK_URL);
    new LoginPage().loginToSlack(LOGIN_USERNAME, LOGIN_PASSWORD);
  });

  it('Create a new Channel', () => {
    channelName = String(new Date().getTime()); // This can also be retreived from a json file
    const addPeopleToChannelModal = new AddPeopleToChannelModal();

    new LeftNavigationBar().openCreateChannelFromChannelSubMenu();
    new CreateChannelModal().createNewChannel(channelName);
    // Verify that the channel was created as expected:
    addPeopleToChannelModal.getChannelName((incommingText) => {
      expect(incommingText).to.be.equal(channelName); // Check that the name matches with the one specified
    });
    addPeopleToChannelModal.closeAddPeopleToChannelModal();
  });

  it('Add people to Channel)', () => {
    const channelDetailsPanel = new ChannelDetailsPanel();
    const addPeopleToChannelModal = new AddPeopleToChannelModal();
    const leftNavigationBar = new LeftNavigationBar();
    const channelPage = new ChannelPage();

    leftNavigationBar.openChannel(channelName); // Opens the desired channel
    channelPage.openChannelDetails(); // Opens the channel details
    channelDetailsPanel.openAddUserModal(); // Open the Add user Modal
    addPeopleToChannelModal.addUserToChannel(userName); // Adds the user to the group
    channelDetailsPanel.checkIfUserIsAMember(userName, (found) => {
      expect(found).to.equal(true); // Scan the list of members, if found return true and compare
    });
  });
});
