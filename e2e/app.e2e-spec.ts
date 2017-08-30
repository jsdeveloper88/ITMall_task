import { ItMallTaskPage } from './app.po';

describe('it-mall-task App', () => {
  let page: ItMallTaskPage;

  beforeEach(() => {
    page = new ItMallTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
