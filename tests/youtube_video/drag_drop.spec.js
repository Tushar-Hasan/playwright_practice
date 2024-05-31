import { test, expect } from "@playwright/test";

test("Drag & drop", async ({ page }) => {
  await page.goto(
    "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
  );
  const source_ = await page.locator("//div[@id='box6']");
  let dest = await page.locator("//div[@id='box106']");

  //1st way
  /* 
  await source_.hover(); //selecting the element
  await page.mouse.down(); //hold

  await dest.hover(); //move to dest
  await page.mouse.up(); //relese
  await page.waitForTimeout(1000);
 */
  //2
  await source_.dragTo(dest);
  await page.waitForTimeout(3000);
});
