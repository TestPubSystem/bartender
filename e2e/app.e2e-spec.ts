import { BartenderPage } from './app.po';

describe('bartender App', () => {
  let page: BartenderPage;

  beforeEach(() => {
    page = new BartenderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
