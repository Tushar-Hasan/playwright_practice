import { test, expect } from "@playwright/test";

test.skip("jquery dropdown", async ({ page }) => {});

test.skip("select dropdown", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

  //Select single option
  /* 
  //1st approch
  await page.locator("//select[@id='select-demo']").selectOption({ label: "Friday" });
  await page.waitForTimeout(2000);
  //2nd approch
  await page.locator("//select[@id='select-demo']").selectOption("Monday");
  await page.waitForTimeout(2000);
  //3rd approch
  await page.locator("//select[@id='select-demo']").selectOption({ value: "Thursday" });
  await page.waitForTimeout(2000);
  //4th approch
  await page.locator("//select[@id='select-demo']").selectOption({ index: 4 });
  await page.waitForTimeout(2000);

 */
  // number of option
  //Not Working
  // have to use option keyword after xpath end within the quotation
  //1st approch
  await page.waitForSelector("#select-demo");
  const options = page.locator("#select-demo option"); //option used
  await expect(options).toHaveCount(8);

  //2nd approch
  const eles = await page.$$("#select-demo option");
  await expect(eles.length).toBe(8);

  //check for values
  //   const allOptions = await page.locator("#select-demo").textContent();
  //   console.log(allOptions);
  //   await expect(allOptions.includes("Monda")).toBeTruthy(); // This is partial match

  //check for values - 2
  let status = false;
  const days = await page.$$("#select-demo option");
  for (const day of days) {
    let day_ = await day.textContent();
    if (day_.includes("Monday")) {
      status = true;
      break;
    }
  }
  await expect(status).toBeTruthy();
});
test("another drop down", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
/*  Not Working
  await page.locator("Select[name=States]").selectOption("Ohio");
  await page.waitForTimeout(2000);
  await page.click("#printMe");
  await page.waitForTimeout(5000);

   */
});
