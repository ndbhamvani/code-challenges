import Page from './page';

class HomePage extends Page {

    get dialogBoxCloseButton () {return $('[class="stickyFooter"]')};


    async clickButton (button) {
        await (await $(`[class="${button}"]`)).click();
    }


    async checkElement (element) {
        await (await $(`[class="${element}"]`)).isExisting();
    }

    open() {
        return super.open('');
    }
}

export default new HomePage();

