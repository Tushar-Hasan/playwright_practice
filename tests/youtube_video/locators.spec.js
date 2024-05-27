import { test, expect } from "@playwright/test";

test("Locators test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.click("id=login2");

  await page.fill("#loginusername", "pavanol");
  await page.fill("#loginpassword", "test@123");
  await page.click("//button[normalize-space()='Log in']");

  //verify
  const logOutBtn = await page.locator("#logout2");
  expect(logOutBtn).toBeVisible();
  await page.close();
});
