import LoginPage from '../../Pages/Login/LoginPage';
import LeftNavigationBar from '../../Pages/LeftNavigationBar/LeftNavigationBar'
import CreateChannelModal from '../../Pages/Channels/CreateChannelModal'
import AddPeopleToChannelModal from '../../Pages/Channels/AddPeopleToChannelModal'

import {URL,LOGIN_USERNAME,LOGIN_PASSWORD} from '../../Utils/Constants';

describe('Test Cases regarding the Channel Functionality', function(){
    before(function(){
        cy.visit(URL);
        new LoginPage().loginToSlack(LOGIN_USERNAME,LOGIN_PASSWORD);
    });

    it('Create a new Channel',function(){
        var channelName = String(new Date().getTime()); //This can also be retreived from a json file
        var addPeopleToChannelModal = new AddPeopleToChannelModal();

        new LeftNavigationBar().openCreateChannelFromChannelSubMenu();
        new CreateChannelModal().createNewChannel(channelName);
         //Verify that the channel was created as expected:
        addPeopleToChannelModal.getChannelName((incommingText) => {
            expect(incommingText).to.be.equal(channelName); //Check that the name matches with the one specified
        });
        addPeopleToChannelModal.closeAddPeopleToChannelModal();
    });
});