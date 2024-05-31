import { test, exoect } from "@playwright/test";

test("date picker test01", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  //1st way
  // await page.getByPlaceholder("Start date").fill("30/5/2024");

  // *** 2nd way ***
  // Desired date
  const year = 2024;
  const Month = "May";
  const day = 25;
  const desire_date = Month + " " + year;
  console.log("converting may:", monthToNumber("May"));

  // get current date
  await page.getByPlaceholder("Start date").click();
  let Cureent_monthYear = await page
    .locator("div[class='datepicker-days'] th[class='datepicker-switch']")
    .textContent();
  // console.log(Cureent_monthYear);
  console.log(desire_date);
  const Cyear = Number(Cureent_monthYear.replace(/[^0-9]/g, ""));
  const Cmonth = Cureent_monthYear.replace(/[0-9 ]/g, ""); // it also converts the space
  //console.log("converting may:",monthToNumber(Cmonth))
  console.log(Cyear);
  console.log(Cmonth);
  //[^0-9]/g: This is a regular expression pattern. [^0-9] matches any character that is not a digit (0-9). The ^ inside the square brackets is a negation, meaning it matches any character except those listed. The g flag at the end stands for "global," meaning it will replace all occurrences in the string, not just the first one.

  await page
    .locator(
      "//div[@class='datepicker-days']//th[@class='prev'][normalize-space()='«']"
    )
    .scrollIntoViewIfNeeded();

  //If Desire year is less than current year
  if (Cyear > year) {
    while (desire_date != Cureent_monthYear) {
      Cureent_monthYear = await goBack();
    }
  } else if (Cyear < year) {
    while (desire_date != Cureent_monthYear) {
      Cureent_monthYear = await goNext();
    }
  } else {
    if (monthToNumber(Cmonth) > monthToNumber(Month)) {
      while (desire_date != Cureent_monthYear) {
        Cureent_monthYear = await goBack();
      }
    } else if (monthToNumber(Cmonth) < monthToNumber(Month)) {
      while (desire_date != Cureent_monthYear) {
        Cureent_monthYear = await goNext();
      }
    } else {
      const dates = await page.locator(
        "//tbody//td[contains(@class, 'day') and not(contains(@class, 'old')) and not(contains(@class, 'new'))]"
      );
      await dates
        .filter({
          hasText: day,
        })
        .click();
    }
  }
  await page.waitForTimeout(5000);

  ///// Functions

  function monthToNumber(month) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames.indexOf(month);
  }
  //Go to next Month
  async function goNext() {
    await page.click(
      "//div[@class='datepicker-days']//th[@class='next'][normalize-space()='»']"
    );
    return await page
      .locator("div[class='datepicker-days'] th[class='datepicker-switch']")
      .textContent();
  }
  // Go to previous month
  async function goBack() {
    await page.click(
      "//div[@class='datepicker-days']//th[@class='prev'][normalize-space()='«']"
    );
    return await page
      .locator("div[class='datepicker-days'] th[class='datepicker-switch']")
      .textContent();
  }
});

/* 
do {
    await page.click(
      "//div[@class='datepicker-days']//th[@class='prev'][normalize-space()='«']"
    );
    Cureent_monthYear = await page
      .locator("div[class='datepicker-days'] th[class='datepicker-switch']")
      .textContent();
  }
 */

//tbody//td[contains(@class, 'day') and not(contains(@class, 'old')) and not(contains(@class, 'new')) and context]
