import { test, expect } from "@playwright/test";

test.skip("iframe handling test", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const allFrames = page.frames();
  console.log(allFrames.length);
});
test("iframe handling test2", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/iframe-demo/"
  );

  const allFrames = page.frames();
  console.log(allFrames.length);

  const frame1 = await page.frame({
    url: "https://www.lambdatest.com/selenium-playground/iframe-demo/contant",
  });
  await frame1.fill("//div[@class='rsw-ce']","I am in iframe!")
  await page.waitForTimeout(2000)
  
});
