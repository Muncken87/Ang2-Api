import { IkeaPage } from './app.po';

describe('ikea App', function() {
  let page: IkeaPage;

  beforeEach(() => {
    page = new IkeaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
