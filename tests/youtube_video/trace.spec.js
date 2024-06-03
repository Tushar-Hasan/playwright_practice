import { test, expect } from "@playwright/test";

test("Trace test", async ({ page }) => {
  await page.goto("https://demo.opencart.com.gr/");
  await page.hover("//a[normalize-space()='Components']");
  await page.click("//a[normalize-space()='Monitors (2)']")

});
