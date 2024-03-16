import { Page, firefox, chromium, webkit } from "@playwright/test"

export class Singleton{
    private static demoPage: Page
    private constructor(){}

    public static async getPageFireFox(){
            const browser = await firefox.launch();
            const context = await browser.newContext();
            const page = await context.newPage();
            Singleton.demoPage = page
            return Singleton.demoPage;
    }
    public static async getPageChromium(){
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        Singleton.demoPage = page
        return Singleton.demoPage;
}
    public static async getPageWebkit(){
        const browser = await webkit.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        Singleton.demoPage = page
        return Singleton.demoPage;
    }
}