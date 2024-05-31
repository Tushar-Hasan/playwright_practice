import { test, expect } from "@playwright/test";

test("upload test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/upload-file-demo"
  );
  const uploadField = await page.locator("//input[@id='file']");
  await page.waitForSelector("//input[@id='file']");
  await uploadField.click();
  await uploadField.setInputFiles(
    "tests/youtube_video/upload_files/sample.txt"
  );
  await page.waitForTimeout(5000);
});

test("Multiple File input", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  await page
    .locator("//input[@id='filesToUpload']")
    .setInputFiles([
      "tests/youtube_video/upload_files/sample.txt",
      "tests/youtube_video/upload_files/sample_copy.txt",
    ]);
    await page.waitForTimeout(5000)
});
