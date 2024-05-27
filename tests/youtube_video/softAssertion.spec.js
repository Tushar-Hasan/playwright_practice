import { test, expect } from "@playwright/test";

test("Assertion test", async ({ page }) => {
  //Hard Assertion
  /* 
  await page.goto("https://www.demoblaze.com/");
  await expect(page).toHaveTitle("STORE123");
  await expect(page).toHaveURL("https://www.demoblaze.com/");

 */

  //soft assertion
  await page.goto("https://www.demoblaze.com/");
  await expect.soft(page).toHaveTitle("STORE123");
  await expect.soft(page).toHaveURL("https://www.demoblaze.com/");
});
