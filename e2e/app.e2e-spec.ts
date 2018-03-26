import { AppComprasPage } from './app.po';

describe('app-compras App', function() {
  let page: AppComprasPage;

  beforeEach(() => {
    page = new AppComprasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
