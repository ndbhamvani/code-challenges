import {Given, When, Then} from '@cucumber/cucumber';

import HomePage from '../pageobjects/home.page';
import InstantDelivery from '../pageobjects/instantDelivery.page';

const pages = {
    home: HomePage,
    instantDelivery: InstantDelivery
}

//Given
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
}); 

//When
When(/^I click on (.+) on the (\w+) page$/, async (button, page) => {
    await pages[page].clickButton(button);
});

//Then
Then(/^the (\w+) no longer appears on the (\w+) page$/, async (element, page) => {
    await !expect(pages[page].checkElement(element)).toBeExisting()
});

Then(/^the user is presented with (.*) page$/, async (title) => {
    await expect(browser).toHaveTitle(title);
});