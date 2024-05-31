import { test, exoect } from "@playwright/test";

test("Mouse Hover TEST", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/hover-demo");
  await page.hover("//button[normalize-space()='Enterprise']");
  await page.waitForTimeout(2000);
  await page.hover("//div[@class='bg-green-100 border border-green-100 text-white px-15 py-5 rounded font-medium hover:bg-white hover:text-green-100 cursor-pointer transition duration-300']")
  await page.waitForTimeout(3000)
});
