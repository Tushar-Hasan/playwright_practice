import { test, expect } from "@playwright/test" 

test.beforeAll(async()=>{
    console.log('Before all magic happens..');
})

test.beforeEach(async()=>{
    console.log('before each  magic happens..');
})

test.afterAll(async()=>{
    console.log('After all magic happens..');
})

test.afterEach(async()=>{
    console.log('after each magic happens..');
})




test.describe('Group 01',()=>{
    test("group test01", async({page})=>{
        console.log("Test01")
    }) 
    test("group test02", async({page})=>{
        console.log("Test02")
    }) 
})


test.describe.skip('Group 03',()=>{
    test("group test03", async({page})=>{
        console.log("Test03")
    }) 
    test("group test04", async({page})=>{
        console.log("Test04")
    }) 
})


test.describe.skip('Group 02',()=>{
    test("group test05", async({page})=>{
        console.log("Test05")
    }) 
    
})



