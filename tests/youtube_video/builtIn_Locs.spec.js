import { test, expect } from "@playwright/test";

test("Built In Locators test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  const placeH1 = await page.getByPlaceholder("Username");
  await expect(placeH1).toBeVisible();

  await placeH1.fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  await page.getByRole("button", { type: "submit" }).click();
  await page.waitForTimeout(2000);

  let name_ = await page
    .locator("//p[@class='oxd-userdropdown-name']")
    .textContent();
  console.log(name_);

  //await expect(page.getByText(name_)).toBeVisible();
});
