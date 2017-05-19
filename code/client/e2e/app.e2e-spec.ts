import { OrderFlyPage } from './app.po';

describe('order-fly App', () => {
  let page: OrderFlyPage;

  beforeEach(() => {
    page = new OrderFlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
