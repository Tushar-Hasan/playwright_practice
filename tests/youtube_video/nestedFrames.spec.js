import { test, expect } from "@playwright/test";

test("Nested frame test", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const parentFrame = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  await parentFrame.fill("//input[@name='mytext3']", "Nested frames");
  await page.waitForTimeout(1000);

  //1st approch to get child elements by attribute
  const childFrame = parentFrame.frameLocator(
    "iframe[src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']"
  );
  await childFrame
    .locator("//div[@id='i5']//div[@class='AB7Lab Id5V1']")
    .check();
  await childFrame
    .locator("//div[@id='i22']//div[@class='uHMk6b fsHoPb']")
    .scrollIntoViewIfNeeded();
  await childFrame
    .locator("//div[@id='i22']//div[@class='uHMk6b fsHoPb']")
    .click();
  await page.waitForTimeout(3000);


  //2nd approch to get elemet by index
  const childs = parentFrame.childFrames();
  await childs[0]
    .locator("//div[@id='i19']//div[@class='uHMk6b fsHoPb']")
    .scrollIntoViewIfNeeded();
  await childs[0]
    .locator("//div[@id='i19']//div[@class='uHMk6b fsHoPb']")
    .click();
  await page.waitForTimeout(2000);



});
