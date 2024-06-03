import { test, expect } from "@playwright/test";

test.skip("Alert test:Handling Javascript Alert", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  page.on("dialog", async (d) => {
    console.log(d.message());
    await d.accept();
    await page.waitForTimeout(2000);
  });
  await page.locator("p:has-text('JavaScript Alerts') button").click();
  await page.hover("//button[normalize-space()='Enterprise']");
  await page.waitForTimeout(2000);
});

test.skip("Alert test:Handling Confirm Alert", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  page.on("dialog", async (d) => {
    console.log(d.message());
    d.accept();
  });
  await page.getByText("Confirm box:").getByRole("button").click();
  await expect.soft(page.getByText("You pressed ok!")).toBeVisible();
  await page.hover("//button[normalize-space()='Enterprise']");
  await page.waitForTimeout(5000);
});
test("Alert test:Handling Prompt Alert", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  page.on("dialog", async (d) => {
    console.log(d.message());
    //await d.waitForTimeout(2000)
    if (d.type() == "prompt") {
      await d.accept("Brainstation-23");
    }
  });
  await page.getByText("Prompt box:").getByRole("button").click();
  await expect.soft(page.getByText("You have entered")).toBeVisible();
  await page.hover("//button[normalize-space()='Enterprise']");
  await page.waitForTimeout(2000);
});
