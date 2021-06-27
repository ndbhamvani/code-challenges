

export default class Page {
    open (path: string) {
        return browser.url(`${path}`);
    }

    async clickButton (button) {
        await (await $(`[class="${button}"]`)).click();
    }

    async checkElement (element) {
        await (await $(`[class="${element}"]`)).isExisting();
    }
} 