import { test, expect, chromium } from '@playwright/test';
import constants from './Constants';

test.describe.configure({ mode: 'serial' });
let browser;
let page;  

test.beforeAll(async ({}) => {
  browser = await chromium.launch();
  page = await browser.newPage();

  await page.goto(constants.expectedUrlMainPage);
  await page.locator('svg').first().click();
  await page.getByText('Text Box').click();
});

test('Page URL', async ({}) => {
  let actualUrl = await page.url();
  await expect(actualUrl).toBe(constants.expectedUrlElementPage);
});

test('Full Name Title', async ({}) => {
  const locator = constants.locatorFullNameTitle(page);
  await expect(locator).toHaveText("Full Name");
});


test('Email Title', async ({}) => {
  const locator = constants.locatorEmailTitle(page);
  await expect(locator).toHaveText("Email");
});

test('Current Address Title', async ({}) => {
  const locator = constants.locatorCurrentAddressTitle(page);
  await expect(locator).toHaveText("Current Address");
});

test('Permanent Address Title', async ({}) => {
  const locator = constants.locatorPermanentAddressTitle(page);
  await expect(locator).toHaveText("Permanent Address");
});

/*Close browser*/
test.afterAll(async () => {
  await page.close();
  await browser.close();
});
