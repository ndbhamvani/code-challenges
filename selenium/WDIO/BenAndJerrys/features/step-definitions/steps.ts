import {Given, When, Then} from '@cucumber/cucumber';

import HomePage from '../pageobjects/home.page';

const pages = {
    home: HomePage
}

//Given
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
}); 

//When
When(/^I click on the (.+) button on the (\w+) page$/, async (button, page) => {
    await pages[page].clickButton(button);
});

//Then
Then(/^the (\w+) no longer appears on the (\w+) page$/, async (element, page) => {
    await !expect(pages[page].checkElement(element)).toBeExisting()
});