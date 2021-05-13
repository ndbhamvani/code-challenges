import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dropdownLink () { return $('[href="/dropdown"]') }
    get addRemoveElementsLink () { return $('[href="/dropdown"]') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickDropDown () {
        await (await this.dropdownLink).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new MainPage();
