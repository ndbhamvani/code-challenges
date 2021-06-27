import Page from './page';

class HomePage extends Page {

    get dialogBox () {return $('[class="stickyFooter"]')};


    clickButton(button) {
        return super.clickButton(button);
    }


    checkElement (element) {
        return super.checkElement(element);
    }

    open() {
        return super.open('');
    }
}

export default new HomePage();

