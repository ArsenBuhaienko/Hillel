import { Singleton } from "./SingletonClass";
import { test } from '@playwright/test';

test('Check Singleton Class FireFox', async ({}) => {
    const page = await Singleton.getPageFireFox(); // Получение контекста с класса Сингелтон
    await page.goto("https://demoqa.com")
  });

  test('Check Singleton Class Chromium', async ({}) => {
    const page = await Singleton.getPageChromium(); // Получение контекста с класса Сингелтон
    await page.goto("https://demoqa.com")
  });

  test('Check Singleton Class Webkit', async ({}) => {
    const page = await Singleton.getPageWebkit(); // Получение контекста с класса Сингелтон
    await page.goto("https://demoqa.com")
  });