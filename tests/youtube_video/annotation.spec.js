import { test, expect } from "@playwright/test" 

//test.only to run that test //can be use in multiple test 
//test.skip to skip that test //can be use in multiple test 

test("test Name 01", async ({page}) => {
    console.log("this is test 01");
});

test("test Name 02", async ({page}) => {
    console.log("this is test 02");
});

test.skip("test Name 03", async ({page}) => {
    console.log("this is test 03");
});

test("test Name 04", async ({page}) => {
    console.log("this is test 04");
});

test("test Name 05", async ({page,browserName}) => {
    //1st way 
    /* 
    if(browserName === "chromium"){
        test.skip()
    }
    console.log("this is test 05"); 
    */

    //2nd way 
    test.skip(browserName === "chromium","Still working on it.")
});

//Fixme
test("test xplore", async({page})=>{
    test.fixme() // this also skip the test 
    console.log('Need to fix test 06');
    
}) 
test("failed test", async({page})=>{
    test.fail()
    console.log('test 07');
   // expect(1).toBe(1) // in this case, test is failed but assertion passes will caused fail.
    expect(1).toBe(2) // in this case, test is failed and assertion also failed  will caused Pass the test.    
}) 

test("failed test02", async({page,browserName})=>{
    
    test.fail(browserName === 'chromium') //assertion true(if browser === chromium) but test failed => fail
    console.log('test 07');
    
  
})

//test.slow 
test("test slow", async({page})=>{
   //test.slow() //this will increase the timeout time 3 times
   test.setTimeout(5000) //to set timeout for sepcific test
   console.log("test 09")
   await page.goto("https://playwright.dev/docs/test-parallel")
}) 