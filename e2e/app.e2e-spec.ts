import { AngularPhotoUploadPage } from './app.po';

describe('angular-photo-upload App', () => {
  let page: AngularPhotoUploadPage;

  beforeEach(() => {
    page = new AngularPhotoUploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
