import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DropDownPage extends Page {
    
    /**
     * define selectors using getter methods
     */
    get pageHeading () { return $('h3=Dropdown List') }
    get dropDownMenu () {return $('#dropdown')}
    //get selectedOption () {return $(`//*[@id="dropdown"]/option[2]`)}


    async selectDropDownMenu (value) {
        await (await this.dropDownMenu).selectByIndex(value);
    }

    async selectedOption (value) {
        return $(`//*[@id="dropdown"]/option[${+value+1}]`)
    } 


    open () {
        return super.open('dropdown');
    }

}

export default new DropDownPage();
