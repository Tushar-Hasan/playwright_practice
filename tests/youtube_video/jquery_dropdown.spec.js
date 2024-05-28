import { test, expect } from "@playwright/test";

test("drop down with search", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  );
  //await page.getByRole('combobox').click()
  await page
    .locator(
      "//select[@id='country']//following-sibling::span//span[@class='selection']"
    )
    .click();
  const searchBox = page.locator(
    "//span[@class='select2-search select2-search--dropdown']//input[@role='textbox']"
  );
  await expect(searchBox).toBeVisible();

  /*    // working 
  await searchBox.fill("Bangladesh");
  const result = await page.locator("//li[normalize-space()='Bangladesh']");
  await expect(result).toBeInViewport();
   */

  const dropButton = await page
    .locator("//span[@aria-expanded='true']//span[@role='presentation']")
    .click();
    const countryOptions = page.locator('.select2-results option');
  
    // Verify that the expected number of options is available (if known, otherwise remove this check)
    await expect(countryOptions).toHaveCount(11);
  await page.waitForTimeout(2000);
});
