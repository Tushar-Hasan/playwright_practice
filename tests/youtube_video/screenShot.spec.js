import { test, expect } from "@playwright/test";

test("ScreenShot Test", async ({ page }) => {
  await page.goto("https://demo.opencart.com.gr/");
  //page.screenshot(
    //{ path: "tests/youtube_video/screenShots/" + Date.now() + "test.png" }); //capture what is in display

    //this will capture full page
    await page.screenshot({path : "tests/youtube_video/screenShots/" + Date.now() + "test.png",fullPage:true})

    //Screenshot of a element 
    await page.locator("//body/div[@id='common-home']/div[@class='row']/div[@id='content']/div[@class='row']/div[3]").screenshot({path : "tests/youtube_video/screenShots/" + Date.now() + "test.png",fullPage:true})

});
