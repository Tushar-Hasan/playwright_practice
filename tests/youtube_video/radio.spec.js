import { expect, test } from "@playwright/test";
import exp from "constants";

test("radio button test", async ({ page }) => {
  page.goto("https://www.lambdatest.com/selenium-playground/radiobutton-demo");
  const male_R = await page.locator("input[value='Male'][name='optradio']");
  await male_R.check();
  await expect(male_R).toBeChecked();
  await expect(
    await page.locator("input[value='Female'][name='optradio']")
  ).not.toBeChecked();
  await page.click("#buttoncheck");
  //ToDO Later 
  await expect(page.locator(".text-gray-900.text-size-15.my-10.text-black.radiobutton").textContent()
});
