import LeftNavigationBar from '../Pages/LeftNavigationBar/LeftNavigationBar';
import CreateChannelModal from '../Pages/Channels/CreateChannelModal';
import AddPeopleToChannelModal from '../Pages/Channels/AddPeopleToChannelModal';
import ChannelPage from '../Pages/Channels/ChannelPage';
import ChannelDetailsPanel from '../Pages/Channels/ChannelDetailsPanel';
import AdditionaOptionsForChannelModal from '../Pages/Channels/AditionalOptionsForChannels/AdditionaOptionsForChannelModal';
import DeleteChannelSubModal from '../Pages/Channels/AditionalOptionsForChannels/DeleteChannelSubModal';
import ChannelBrowser from '../Pages/Channels/ChannelBrowser';

class BaseTest {
  createChannel(incommingChannelName) {
    const addPeopleToChannelModal = new AddPeopleToChannelModal();
    const leftNavigationBar = new LeftNavigationBar();
    const createChannelModal = new CreateChannelModal();
    const channelBrowser = new ChannelBrowser();

    leftNavigationBar.openChannelBrowser();
    channelBrowser.openCreateChannelModal();
    createChannelModal.createNewChannel(incommingChannelName);
    addPeopleToChannelModal.closeAddPeopleToChannelModal();
  }

  deleteAllAutomationCreatedChannelsFromLeftNavigationBar() {
    const channelDetailsPanel = new ChannelDetailsPanel();
    const channelPage = new ChannelPage();
    const additionalOptionsForChannelModal = new AdditionaOptionsForChannelModal();
    const deleteChannelSubModal = new DeleteChannelSubModal();
    const leftNavigationBar = new LeftNavigationBar();

    leftNavigationBar.getAllChannelNames((channelName) => {
      if (channelName.startsWith('-cyp-')) {
        leftNavigationBar.openChannel(channelName);
        channelPage.openChannelDetailsPanel();
        channelDetailsPanel.openChannelAdditionalOptionsModal();
        additionalOptionsForChannelModal.clickOnDeleteChannel();
        deleteChannelSubModal.deleteChannel();
        channelPage.closeChannelDetailsPanel(); // To reset the state of the channel
      }
    });
  }

  updateBaseUrl() {
    let newURL = null;
    cy.url().then((currentURL) => {
      newURL = currentURL.split('/');
      newURL[newURL.length - 1] = null;
      Cypress.config('baseUrl', newURL.join('/'));
    });
  }

  openURLPath(incommingURLPath) {
    cy.visit(incommingURLPath);
  }
}
export default BaseTest;
