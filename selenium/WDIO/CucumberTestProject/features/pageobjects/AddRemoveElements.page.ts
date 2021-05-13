import Page from './page';

class AddRemoveElements extends Page {

    get pageHeading () { return $('h3=Add/Remove Elements') }
    get addElementButton () {return $('=Add Element')}
    get deleteButton () {return $('=Delete')}


    async clickAddElementButton () {
        await (await this.addElementButton).click();
    }

    async clickDeleteButton () {
        await (await this.deleteButton).click();
    }



}

export default new AddRemoveElements();
