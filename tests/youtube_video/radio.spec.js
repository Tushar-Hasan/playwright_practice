import { expect, test } from "@playwright/test";

test("radio button test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/radiobutton-demo"
  );
  const male_R = await page.locator("input[value='Male'][name='optradio']");
  await male_R.check();
  //await expect(male_R).toBeChecked();
  await expect(male_R.isChecked()).toBeTruthy();
  await expect(
    await page.locator("input[value='Female'][name='optradio']")
  ).not.toBeChecked();
  await page.click("#buttoncheck");
  await expect(
    await page.locator(
      "//div[@class='px-10 pt-20 pb-5']//p[contains(@class,'radiobutton')]"
    )
  ).toHaveText("Radio button 'Male' is checked");
});
