import MainPageObject from "../support/pages/main.pageObject";

const mainPage = new MainPageObject();

describe('Adding to cart', () => {
  
  beforeEach(() => {
    mainPage.visit();
  });

  it('should provide the ability to add goods to cart', () => {
    mainPage.clickGoodsLink();
    mainPage.clickAddToCartButton();
    
    mainPage.assertAlertMessageContains('Product added');
  });
});