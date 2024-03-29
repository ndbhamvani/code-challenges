import {Given, When, Then} from '@cucumber/cucumber';

import HomePage from '../pageobjects/home.page';
import InstantDelivery from '../pageobjects/instantDelivery.page';
import CookieDoughChunks from '../pageobjects/cookieDoughChunks.page';

const pages = {
    home: HomePage,
    instantDelivery: InstantDelivery,
    cookieDoughChunks: CookieDoughChunks
}

const buttons = {
    browseFlavoursClose: 'stickyFooter-close',
    browseFlavours: 'stickyFooter-button btn',
}

//Given
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
}); 

//When
When(/^I click on the (.+) button on the (\w+) page$/, async (button, page) => {
    await pages[page].clickButton(buttons[button]);
});

//Then
Then(/^the (\w+) page (\w+) element no longer appears$/, async (page, element) => {
    await !expect(pages[page].checkElement(buttons[element])).toBeExisting()
});

Then(/^the user is presented with (.*) page$/, async (title) => {
    await expect(browser).toHaveTitle(title);
});