import { test, expect } from "@playwright/test";

test("drop down with search", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  await page.getByRole('combobox').click()
});
