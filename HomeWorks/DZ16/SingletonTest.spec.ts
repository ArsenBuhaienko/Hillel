import { Singleton } from "./SingletonClass";
import { test } from '@playwright/test';

test('Check Singleton Class', async ({}) => {
    const page = await Singleton.getPage(); // Получение контекста с класса Сингелтон
    await page.goto("https://demoqa.com")
    
  });