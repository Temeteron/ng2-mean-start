import { Ng2MeanStartPage } from './app.po';

describe('ng2-mean-start App', function() {
  let page: Ng2MeanStartPage;

  beforeEach(() => {
    page = new Ng2MeanStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
