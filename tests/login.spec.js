import { chromium, test, expect } from "playwright/test";

test("Login Test Demo", async () => {
  const browser = await chromium.launch();
  const constext = await browser.newContext();
  const page = await constext.newPage();

  await page.goto("https://www.saucedemo.com/v1/");
  console.log("title is:", await page.title());
  await expect(page).toHaveTitle("Swag Labs");
  // await page.click("Swag Labs");
  await page.fill("//input[@id='user-name']", "standard_user");

  await page.locator("//input[@id='password']").fill("secret_sauce");
  let productPage = constext.newPage();
  productPage = page.click("//input[@id='login-button']");
  await page.waitForTimeout(1000);
  return productPage;
  //sleep
});
