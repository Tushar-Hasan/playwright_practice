import { test, expect } from "@playwright/test";

test.skip("another singe drop down", async ({ page }) => {
  await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
  await page.selectOption(
    "//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//p//select",
    "Bangladesh"
  );
  await page.waitForTimeout(2000);
});

test.skip("Multiple drop down selection test ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.selectOption("#colors", ["Blue", "Green", "Yellow"]);
  await page.waitForTimeout(2000);
  await page.selectOption("#country", ["United States", "Australia", "Japan"]);
});
