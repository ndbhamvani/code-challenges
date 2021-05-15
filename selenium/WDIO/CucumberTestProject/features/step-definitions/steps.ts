import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import MainPage from '../pageobjects/main.page';
import DropDownPage from '../pageobjects/dropdown.page';
import AddRemoveElementsPage from '../pageobjects/AddRemoveElements.page';

const pages = {
    login: LoginPage,
    main: MainPage,
    dropdown: DropDownPage,
    addRemoveElements: AddRemoveElementsPage,
}

//GIVEN
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});


//WHEN
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I click the (\w+) link on the (\w+) page$/, async (link, page) => {
    await pages[page].selectPageLink(link);
});

When(/^I select option (\w+) on the (\w+) menu$/, async (value, page) => {
    await pages[page].selectDropDownMenu(value)
});


//THEN
Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^The header should say: (.*)$/, async (heading) => {
    await expect(DropDownPage.pageHeading).toBeExisting();
    await expect(DropDownPage.pageHeading).toHaveText(heading);
});

Then(/^the dropdown text for selected option (.*) should say: (.*)$/, async (value, selectionText) => {
    await expect(DropDownPage.dropDownMenu).toBeExisting();
    await expect(DropDownPage.selectedOption(value)).toHaveText(selectionText);
});

