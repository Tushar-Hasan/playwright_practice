import { exppect, test } from "@playwright/test";

test("Single from demo", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  await page.fill("//input[@id='user-message']", "This is message from BS23");
  await page.click("//button[@id='showInput']");

  await page.waitForTimeout(2000);
  
  const result =await  page.locator("//p[@id='message']")
  expect(result).toHaveText("This is message from BS23")
  const in1 = await page.locator("//input[@id='sum1']");
  await in1.scrollIntoViewIfNeeded();
  in1.fill("4");
  await page.waitForTimeout(2000);


  await page.fill("//input[@id='sum2']", "5");
  await page.waitForTimeout(2000);
});
