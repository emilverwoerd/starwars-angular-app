import { StarwarsAppPage } from './app.po';

describe('starwars-app App', () => {
  let page: StarwarsAppPage;

  beforeEach(() => {
    page = new StarwarsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sw works!');
  });
});
