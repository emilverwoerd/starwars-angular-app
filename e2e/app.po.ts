import { browser, element, by } from 'protractor';

export class StarwarsAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sw-root h1')).getText();
  }
}
