import { Angular4PlaygroundPage } from './app.po';

describe('angular4-playground App', () => {
  let page: Angular4PlaygroundPage;

  beforeEach(() => {
    page = new Angular4PlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
