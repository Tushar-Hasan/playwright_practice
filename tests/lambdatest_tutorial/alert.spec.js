import { test, expect } from "@playwright/test";

test.skip("Alert Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  page.on("dialog", async (d) => {
    expect.soft(d.type()).toContain("alert");
    expect(d.message()).toContain("I am a JS Alert");
    await d.accept();
  });

  await page
    .locator("//button[normalize-space()='Click for JS Alert']")
    .click();
  //await page.waitForTimeout(2000);
});

test.skip("Alert Confirmation", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("I am a");
    await dialog.dismiss();
  });
  await page.click("//button[@onclick='jsConfirm()']");
});

test("Alert Promt test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("prompt");
      expect(dialog.message()).toContain("I am a");
      await dialog.accept("Hello");
    });
    await page.click("//button[@onclick='jsPrompt()']");
    await page.waitForTimeout(5000)
  });