import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";

test("login test", async ({ page }) => {
  //Login
  const log = new loginPage(page);
  await log.gotoLoginPage();
  await log.doLogin("pavanol", "test@123");
  await page.waitForTimeout(3000)
});
