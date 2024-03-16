import { test, expect, chromium } from '@playwright/test';
import { ElementsPage } from './ElementsPage';

/*Data for tests*/
let positiveDataSet = [
    {
        userName: "Cheshire",
        password: "Qwerty12345!"
    }
]

let negativeDataSet = [
    {
        userName: "Cheshifhf",
        password: "Qwerjjfj!1234"
    },
    {
        userName: "VVVVVVVVV",
        password: "VVVVVVVVV!V"
    },
    {
        userName: "mt",
        password: "SMT!1234"
    }
]

test.describe.configure({ mode: 'serial' });
let browser;
let page;  

/*Inicializate browser*/
test.beforeAll(async ({}) => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

positiveDataSet.forEach(({ userName, password }, index) => {
    try{
    test(`Positive Login Test ${index + 1}`, async () => {
        let elementsPage = new ElementsPage(page)

        await elementsPage.openElementsPage();
        await elementsPage.checkLoginPositive(userName, password);
    });
    }catch(e){Console.log("Programm executed with Error"+e)}
})


negativeDataSet.forEach(({ userName, password }, index) => {
    try{
        test(`Negative Login Test ${index + 1}`, async () => {
            const browser = await chromium.launch()
            const page = await browser.newPage()
            let elementsPage = new ElementsPage(page)
    
            await elementsPage.openElementsPage();
            await elementsPage.checkLoginNegative(userName, password);
        });
    }catch(e){Console.log("Programm executed with Error"+e)}
})

/*Close browser*/
test.afterAll(async () => {
    await page.close();
    await browser.close();
  });



  