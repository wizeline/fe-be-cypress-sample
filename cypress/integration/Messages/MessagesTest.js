import LoginPage from '../../Pages/Login/LoginPage';
import ChannelPage from '../../Pages/Channels/ChannelPage';
import { LOGIN_USERNAME, LOGIN_PASSWORD } from '../../Utils/Constants';
import BaseTest from '../../Utils/BaseTest';

const faker = require('faker');

describe('Test Cases regarding the Sending/Updating/Deleting Messages Functionality', () => {
  before(() => {
    cy.visit('/');
    new LoginPage().loginToSlack(LOGIN_USERNAME, LOGIN_PASSWORD);
    new BaseTest().updateBaseUrl();
  });

  it('Send message', () => {
    const channelPage = new ChannelPage();
    const message = faker.random.word(); // Use faker js to send random messages.
    channelPage.sendMessage(message);
    channelPage.getLastMessage((incommingText) => {
      expect(incommingText).to.be.equal(message); // Check that the last message matches with the one specified
    });
  });
});
