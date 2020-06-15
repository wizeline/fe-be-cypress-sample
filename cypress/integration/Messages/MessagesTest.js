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
    const messages = new ChannelPage();
    const message = faker.random.word(); // Use faker js to send random messages.
    messages.sendMessage(message);
  });
});
