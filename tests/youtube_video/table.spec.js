import { test, expect } from "@playwright/test";

test("testname", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //getting all the rows & columns of a table
  const table = page.locator("#productTable");

  //number of columns
  const columns = table.locator("thead tr th");
  expect(await columns.count()).toBe(4);

  //number of rows
  const rows = table.locator("tbody tr");
  expect(await rows.count()).toBe(5);

  //select a spwcific row
  /*  
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Product 4",
  });
  await matchedRow.locator("input").check();
 */
  //console.log("Before after checkedRow");
  checkedRow(page, rows, "Product 4");

  //console.log("Rows", await rows.count());
  /*  
 for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    console.log("*** Row ", i + 1, " ***");

    const tds = await row.locator("td");
    for (let j = 0; j < await tds.count() - 1; j++) {
      const value = await tds.nth(j).textContent();
      console.log(value);
    }
  }
   */

  const pages = page.locator("#pagination li a");
  console.log("pages", await pages.count());
  for (let p = 0; p < (await pages.count()); p++) {
    console.log("Page :  ", page);
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      console.log("*** Row ", i + 1, " ***");

      const tds = await row.locator("td");
      for (let j = 0; j < (await tds.count()) - 1; j++) {
        const value = await tds.nth(j).textContent();
        console.log(value);
      }
    }
  }

  ////////
  async function checkedRow(page, rows, name) {
    const matchedRow = rows.filter({
      has: page.locator("td"),
      hasText: name,
    });
    await matchedRow.locator("input").check();
  }
});
