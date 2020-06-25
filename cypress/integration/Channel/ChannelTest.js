import AdditionaOptionsForChannelModal from '../../Pages/Channels/AditionalOptionsForChannels/AdditionaOptionsForChannelModal';
import DeleteChannelSubModal from '../../Pages/Channels/AditionalOptionsForChannels/DeleteChannelSubModal';
import AddPeopleToChannelModal from '../../Pages/Channels/AddPeopleToChannelModal';
import LeftNavigationBar from '../../Pages/LeftNavigationBar/LeftNavigationBar';
import ChannelDetailsPanel from '../../Pages/Channels/ChannelDetailsPanel';
import CreateChannelModal from '../../Pages/Channels/CreateChannelModal';
import ChannelBrowser from '../../Pages/Channels/ChannelBrowser';
import ChannelPage from '../../Pages/Channels/ChannelPage';
import LoginPage from '../../Pages/Login/LoginPage';
import BaseTest from '../../Utils/BaseTest';
import { LOGIN_USERNAME, LOGIN_PASSWORD } from '../../Utils/Constants';

describe('Test Cases regarding the Channel Functionality', () => {
  const additionalOptionsForChannelModal = new AdditionaOptionsForChannelModal();
  const addPeopleToChannelModal = new AddPeopleToChannelModal();
  const deleteChannelSubModal = new DeleteChannelSubModal();
  const channelDetailsPanel = new ChannelDetailsPanel();
  const createChannelModal = new CreateChannelModal();
  const leftNavigationBar = new LeftNavigationBar();
  const channelBrowser = new ChannelBrowser();
  const channelPage = new ChannelPage();
  const baseTest = new BaseTest();

  let userName;
  let channelName;

  before(() => {
    cy.visit('/');
    new LoginPage().loginToSlack(LOGIN_USERNAME, LOGIN_PASSWORD);
    baseTest.updateBaseUrl();
    cy.fixture('Users').then((user) => {
      userName = user.slack_users; // Gets from JSON file the array of users to add to a channel
    });
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('x', 'd-l', 'd', 'd-s', 'lc');
    channelName = `-cyp-${String(new Date().getTime())}`;
    // Remove previous channels from list
    baseTest.deleteAllAutomationCreatedChannelsFromLeftNavigationBar();
  });

  it('Create a new Channel', () => {
    leftNavigationBar.openChannelBrowser();
    channelBrowser.openCreateChannelModal();
    createChannelModal.createNewChannel(channelName);
    addPeopleToChannelModal.getChannelName((incommingText) => {
      expect(incommingText).to.be.equal(channelName); // Check that the name matches with the one specified
    });
    addPeopleToChannelModal.closeAddPeopleToChannelModal();
  });

  it('Add people to Channel', () => {
    baseTest.createChannel(channelName);
    leftNavigationBar.openChannel(channelName); // Opens the desired channel
    channelPage.openChannelDetailsPanel(); // Opens the channel details
    channelDetailsPanel.openAddUserModal(); // Open the Add user Modal
    addPeopleToChannelModal.addUserToChannel(userName[0]); // Adds the user to the group
    channelDetailsPanel.checkIfUserIsAMember(userName[0], (found) => {
      expect(found).to.equal(true); // Scan the list of members, if found return true and compare
    });
  });

  it('Leave Channel', () => {
    baseTest.createChannel(channelName);
    leftNavigationBar.openChannel(channelName); // Opens the desired channel
    channelPage.openChannelDetailsPanel(); // Opens the channel details Panel
    channelDetailsPanel.leaveChannel(); // Leaves the current channel
    channelPage.getCurrentChannelName((currentChannelName) => {
      expect(currentChannelName).to.be.equal('general'); // After we leave a channel we get redirected to the 'general' channel
    });
  });

  it('Delete Channel', () => {
    baseTest.createChannel(channelName); // Create a channel to be deleted
    channelPage.openChannelDetailsPanel();
    channelDetailsPanel.openChannelAdditionalOptionsModal();
    additionalOptionsForChannelModal.clickOnDeleteChannel();
    deleteChannelSubModal.deleteChannel();
    channelPage.closeChannelDetailsPanel(); // Just to add some time to allow the channel to stop being shown
    channelPage.getCurrentChannelName((currentChannelName) => {
      expect(currentChannelName).to.not.be.equal(channelName); // After we leave a channel we get redirected to the 'general' channel
    });
  });
});
