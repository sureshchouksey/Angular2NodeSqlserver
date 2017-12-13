import { AngularNodeSqlPage } from './app.po';

describe('angular-node-sql App', () => {
  let page: AngularNodeSqlPage;

  beforeEach(() => {
    page = new AngularNodeSqlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
