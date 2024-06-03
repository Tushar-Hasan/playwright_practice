exports.loginPage = class loginPage {
  constructor(page) {
    this.page = page;
    this.loginBtnLink = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = "button[onclick='logIn()']";
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/");
  }
  async doLogin(username, password) {
    await this.page.click(this.loginBtnLink);
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
};

/* 



import { test, expect } from "@playwright/test";

test("login Test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.click("//a[@id='login2']");
  await page.fill("#loginusername", "pavanol");
  await page.fill("#loginpassword", "test@123");
  await page.click("button[onclick='logIn()']");
});
 */
