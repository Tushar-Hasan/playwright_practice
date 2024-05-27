import { test, expect } from "@playwright/test";

test("Locators test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  const links_ = await page.$$("a");
  //await page.waitForSelector(
  //   "//div[@class= 'col-lg-9']//div[@id='tbodyid']//h4//a"
  // );
  await page.waitForTimeout(1000);
  const products = await page.$$(
    "//div[@class= 'col-lg-9']//div[@id='tbodyid']//h4//a"
  );
  const products2 = await page.locator(
    //not iterable
    "//div[@class= 'col-lg-9']//div[@id='tbodyid']//h4//a"
  );

  for (const link of links_) {
    const textLink = await link.textContent();
    //console.log(textLink);
  }

  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }
  await expect(products2).toHaveCount(9);
  // for (const product of products2) {
  //   const productName = await product.textContent();
  //   console.log(productName);
  // }
});
