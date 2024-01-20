import { test, expect, chromium } from '@playwright/test';
import constants from './Constants.spec';

test.describe.configure({ mode: 'serial' });  // Не очень понимаю что это, но без этой конструкции не работает
let page;  

test.beforeAll(async ({}) => {
  const browser = await chromium.launch();
  page = await browser.newPage();

  await page.goto('https://demoqa.com/');
  await page.locator('svg').first().click();
  await page.getByText('Text Box').click();
});

test('Page URL', async ({}) => {
  let actualUrl = await page.url();
  await expect(actualUrl).toBe(constants.expectedUrlElementPage);
});

test('Full Name Title', async ({}) => {
  await expect(page.getByText('Full Name')).toHaveText("Full Name");
});

// Не очень понял как локатор можно через констранту сделать

test('Email Title', async ({}) => {
  await expect(page.getByText('Email')).toHaveText("Email");
});

test('Current Address Title', async ({}) => {
  await expect(page.getByText('Current Address')).toHaveText("Current Address");
});

test('Permanent Address Title', async ({}) => {
  await expect(page.getByText('Permanent Address')).toHaveText("Permanent Address");;
});

/*Close browser*/
test.afterAll(async () => {
  await page.close();
});
