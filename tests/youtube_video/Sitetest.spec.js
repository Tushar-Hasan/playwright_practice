import { test, expect } from "@playwright/test";

test("testname", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
})