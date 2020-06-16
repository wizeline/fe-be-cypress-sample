import LoginPage from '../../Pages/Login/LoginPage';
import ChannelPage from '../../Pages/Channels/ChannelPage';
import {
  SLACK_URL,
  LOGIN_USERNAME,
  LOGIN_PASSWORD,
} from '../../Utils/Constants';

const faker = require('faker');

describe('Test Cases regarding the Sending/Updating/Deleting Messages Functionality', () => {
  before(() => {
    cy.visit(SLACK_URL);
    new LoginPage().loginToSlack(LOGIN_USERNAME, LOGIN_PASSWORD);
  });

  it('Send message', () => {
    const channelPage = new ChannelPage();
    const message = faker.random.word(); // Use faker js to send random messages.
    channelPage.sendMessage(message);
    channelPage.getMessageSent((incommingText) => {
      expect(incommingText).to.be.equal(message); // Check that the message matches with the one specified
    });
  });
});
