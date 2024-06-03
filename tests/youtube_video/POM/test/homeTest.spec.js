import { test, expect } from "@playwright/test";

import { HomePage } from "../pages/homePage";
import { loginPage } from "../pages/loginPage";

test("homeTest", async ({ page }) => {
  const log = new loginPage(page);
  await log.gotoLoginPage();
  await log.doLogin("pavanol", "test@123");
  const home = new HomePage(page);
  await home.addProductToCart("Nexus 6");
  await page.waitForTimeout(2000);
  await home.goToCartPage();
  await page.waitForTimeout(20000);
});
