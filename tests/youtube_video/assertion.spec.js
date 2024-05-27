import { test, expect } from "@playwright/test";

test("Assertion test", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

  //Url Assertion
  await expect(page).toHaveURL(
    "https://demo.nopcommerce.com/register?returnUrl=%2F"
  );

  //page title assertion
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //element visiblity assertion
  await expect(
    page.locator("//img[@alt='nopCommerce demo store']")
  ).toBeVisible();

  // enable assertion
  await expect(page.getByPlaceholder("Search store")).toBeEnabled();

  //checked assertion
  const radioBtn = await page.locator("#gender-male");

  radioBtn.click();
  await expect(radioBtn).toBeChecked();

  // Attribute assertion
  const BtnReg = page.locator("#register-button");
  await expect(BtnReg).toHaveAttribute("type", "submit");

  //Havetext assertion
  await expect(page.locator("//div[@class='page-title']//h1")).toHaveText(
    "Register"
  );

  //ToContainText()
  await expect(
    page.locator("//strong[normalize-space()='Your Personal Details']")
  ).toContainText("Details"); // *********case sensitive********** //also works only with locator object

  //TohaveValue()
  const lastNameInput = await page.locator("#LastName");
  await lastNameInput.fill("Kahbib");
  await expect(lastNameInput).toHaveValue("Kahbib");

  // ToHaveCount assertion
  const options = await page.locator("//select[@name='DateOfBirthDay']/option");
  /*   
  toHaveCount() - doesn't work with multiple locator - e.g, page.$$('locators')
                - it only works with locator Object.e.g, page.locator('locator')  
 */
  await expect(options).toHaveCount(32);
});
