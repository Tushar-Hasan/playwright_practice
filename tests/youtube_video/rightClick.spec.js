import { test, exoect } from "@playwright/test";
import { platform } from "os";

test("double click", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  const btn = page.locator("//span[@class='context-menu-one btn btn-neutral']");
  await btn.click({ button: "right" });
  await page.waitForTimeout(3000)
});
