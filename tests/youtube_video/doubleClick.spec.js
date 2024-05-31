import { test, expect } from "@playwright/test";

test("double click test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .locator("//button[normalize-space()='Copy Text']")
    .scrollIntoViewIfNeeded();
  await page.dblclick("//button[normalize-space()='Copy Text']");
  await page.waitForTimeout(2000);
});
