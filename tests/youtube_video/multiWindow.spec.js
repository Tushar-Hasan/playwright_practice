import { test, expect, chromium } from "@playwright/test";

test.skip("multi window", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page01 = await context.newPage();
  // const page01 = (await context).newPage();
  const page02 = await context.newPage();

  //Number of pages of a context
  const allPages = context.pages();
  console.log("Page created :", allPages.length);

  await page01.goto("https://playwright.dev/docs/test-parallel");
  await page02.goto("https://playwright.dev/docs/test-annotations");
  await page02.waitForTimeout(2000);
  await page01.waitForTimeout(2000);
});
test("Multiple pages ", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  const pageProm = context.waitForEvent("page");
  await page.click("//a[normalize-space()='OrangeHRM, Inc']");
  const newPage = await pageProm;
  await expect(newPage).toHaveTitle(
    "Human Resources Management Software | OrangeHRM"
  );
  await page.waitForTimeout(2000);
  await newPage.waitForTimeout(2000);
});
