import { test, exoect } from "@playwright/test";

test("date picker test01", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  //1st way
  // await page.getByPlaceholder("Start date").fill("30/5/2024");

  // *** 2nd way ***
  // Desired dates
  const startDate = getBackDate(25, "January", 2025);

  // get current date
  await page.getByPlaceholder("Start date").click();
  let Cureent_monthYear = await page
    .locator("div[class='datepicker-days'] th[class='datepicker-switch']")
    .textContent();

  const Cyear = Number(Cureent_monthYear.replace(/[^0-9]/g, ""));
  const Cmonth = Cureent_monthYear.replace(/[0-9 ]/g, ""); // it also converts the space
  //[^0-9]/g: This is a regular expression pattern. [^0-9] matches any character that is not a digit (0-9). The ^ inside the square brackets is a negation, meaning it matches any character except those listed. The g flag at the end stands for "global," meaning it will replace all occurrences in the string, not just the first one.

  await page
    .locator(
      "//div[@class='datepicker-days']//th[@class='prev'][normalize-space()='«']"
    )
    .scrollIntoViewIfNeeded();

  //If Desire year is less than current year
  await selectdate(startDate);
  await page.waitForTimeout(5000);
  await page.click("//input[@placeholder='End date']");
  await selectdate(getBackDate(5, "June", 2026));
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

  async function selectdate(date) {
    const desire_date = date[3];
    const year = date[2];
    const Month = date[1];
    const dayOf = date[0];

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
      }
    }

    const dates = await page
      .locator(
        "//tbody//td[contains(@class, 'day') and not(contains(@class, 'old')) and not(contains(@class, 'new')) and text() = '" +
          dayOf +
          "']"
      )
      .click();
    // const date_=await dates.getByText(dayOf);
    // console.log("Count",await date_.count());
  }

  function getBackDate(day, month, Year) {
    return [day, month, Year, month + " " + Year];
  }
});
