import { test, expect } from "@playwright/test" 

test("test Name 01@sanity", async ({page}) => {
    console.log("this is test 01");
});

test("test Name 02@smoke", async ({page}) => {
    console.log("this is test 02");
});

test('test Name 03@sanity', async ({page}) => {
    console.log("this is test 03");
});

test("test Name 04@sanity@smoke", async ({page}) => {
    console.log("this is test 04");
});

test("test Name 05@reg", async ({page}) => {
    console.log("this is test 05");
});
