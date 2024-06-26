import { test, expect } from "@playwright/test";

test.skip("Multiple Selection test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.click("//select[@id='multi-select']");
  await page.click("//option[@value='California']");
  await page.waitForTimeout(1000);
  await page.click("//button[@id='printMe']");
  // await page.waitForTimeout(5000);
  await expect(page.locator("//span[@class='genderbutton']")).toHaveText(
    "California"
  );
  await page.waitForTimeout(3000);
});


test("datePicker", async ({ page }) => {
   

await page.goto("https://www.redbus.in/");
const year="2024"
const month="March"
const date ="20"
 
await page.click("//div[@id='onwardCal']")
await page.waitForTimeout(2000)
})
