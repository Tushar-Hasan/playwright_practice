exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.productList = "#tbodyid";
    this.addToCartBtn = "//a[@class='btn btn-success btn-lg']";
    this.cart = "//a[@id='cartur']";
  }

  async addProductToCart(name) {
    await this.page
      .locator(this.productList)
      .getByRole("link")
      .filter({ hasText: name })
      .click();

    await this.page.on("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        dialog.accept();
      }
    });
    await this.page.click(this.addToCartBtn);
  }

  async goToCartPage() {
    await this.page.click(this.cart);
  }
};
