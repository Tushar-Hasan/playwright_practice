import { test, expect } from "@playwright/test";

test("popUp Window", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("//a[@title='Follow @Lambdatesting on Twitter']"),
  ]);
   newWindow.click(
    "//a[@aria-label='X']//div[@class='css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci']//*[name()='svg']"
  );
  await page.waitForTimeout(2000)
});
