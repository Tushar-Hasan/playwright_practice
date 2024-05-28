import { test, expect } from "@playwright/test";

test("Hidden Drop Down Test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //login to orangehrm
  await page.fill("//input[@placeholder='Username']", "Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.click("//button[@type='submit']");

  //move
  await page.waitForSelector(
    "//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']"
  );
  await page.click(
    "//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']"
  );

  // Hidden drob Down
  await page.click(
    "//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]"
  );
  //await page.click("//span[normalize-space()='Automaton Tester']");
  await page.waitForSelector("//div[@class='oxd-select-option']//span")
  const options = await page.$$("//div[@class='oxd-select-option']//span");
  const option2 =await page.locator("//div[@class='oxd-select-option']//span option")
  for (let option of options) {
    let value = await option.textContent();
    if (value.includes("Automation")) {
      option.click();
    }
    console.log(value);
    
  }
  console.log("elements",options.length);
  
  await page.waitForTimeout(2000);
});
