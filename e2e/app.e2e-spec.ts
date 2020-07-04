import { ClientGSPage } from './app.po';

describe('client-gs App', function() {
  let page: ClientGSPage;

  beforeEach(() => {
    page = new ClientGSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
