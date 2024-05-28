import { test, expect } from "@playwright/test";

test("Auto Suggestion drop down test", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  await page.locator("//input[@id='src']").fill("Delhi");

  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]");
  const options = await page.$$("//li[contains(@class,'sc-iwsKbI')]");
  for (let option of options) {
    let value = await option.textContent();
    if (value.includes("ISBT Kashmiri Gate")) {
      option.click();
    }
  }
  await expect(
    await page.locator("//text[@class='placeHolderMainText']")
  ).toHaveText("ISBT Kashmiri Gate");
});
