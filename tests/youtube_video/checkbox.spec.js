import { test, expect } from "@playwright/test";
import exp from "constants";

test.skip("Single Checkbox test", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");

  //single checkbox
  const single_checkbox = await page.locator("//input[@id='isAgeSelected']");
  await single_checkbox.check();
  expect(single_checkbox).toBeChecked();
  //2nd way
  expect(await page.locator("//input[@id='isAgeSelected']").isChecked()).toBeTruthy();

  //uncheck the checkbox

  await single_checkbox.uncheck();
  expect.soft(await single_checkbox.isChecked()).toBeFalsy();
  expect.soft(await page.locator("//input[@id='isAgeSelected']")).toBeChecked();
});

test.skip("multiple checbox test", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
  const checkboxes = [
    "//input[@id='ex1-check1']",
    "//input[@id='ex1-check2']",
    "//div[@class='input-body mt-20']//div[3]//input[1]",
    "//div[@class='input-body mt-20']//div[4]//input[1]",
  ];

  for (let loc of checkboxes) {
    await page.locator(loc).scrollIntoViewIfNeeded();
    await page.locator(loc).check();
  }
  //page.waitForTimeout(8000);
});

test("disabled checkBox", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
  //   const checkboxes = [
  //     "//input[@id='ex1-check1']",
  //     "//input[@id='ex1-check2']",
  //     "//div[@class='input-body mt-20']//div[3]//input[1]",
  //     "//div[@class='input-body mt-20']//div[4]//input[1]",
  //   ];

  const eles = await page.$$(
    "//div[normalize-space()='Disabled Checkbox Demo']/following-sibling::div//div/input"
  );
  for (const ele of eles) {
    if (await ele.isEnabled()) {
      ele.check();
    }
  }
});
