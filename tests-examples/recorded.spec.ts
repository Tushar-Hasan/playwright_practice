const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('scret_sauce4');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).nth(1).click();
  await page.locator('div').filter({ hasText: /^\$7\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'All Items' }).click();
  await page.locator('div').filter({ hasText: /^\$29\.99REMOVE$/ }).getByRole('button').click();
  await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Tyler ');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Durden ');
  await page.locator('#checkout_info_container div').nth(1).click();
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('1202');
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('link', { name: 'FINISH' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();