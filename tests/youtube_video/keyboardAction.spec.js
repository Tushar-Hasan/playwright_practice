import { test, expect } from "@playwright/test";

test("keyboard actiion test", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");
  const first = await page.locator(
    "//textarea[@placeholder='Paste one version of the text here.']"
  );
  const scnd = await page.locator(
    "//textarea[@placeholder='Paste another version of the text here.']"
  );
  await first.fill("Hello Keyboard");
  await first.scrollIntoViewIfNeeded();
  await page.keyboard.press("Control+A"); //multiple key combination 
  await page.keyboard.press("Control+C");

  await page.keyboard.down("Tab"); //single key press
  await page.keyboard.up("Tab");

  await page.keyboard.press("Control+V");

  await page.waitForTimeout(2000);
});
