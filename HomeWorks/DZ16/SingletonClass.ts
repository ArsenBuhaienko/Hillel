import { Page, firefox } from "@playwright/test"

export class Singleton{
    private static demoPage: Page
    private constructor(){}

    public static async getPage(){
        
            const browser = await firefox.launch();
            const context = await browser.newContext();
            const page = await context.newPage();
            Singleton.demoPage = page
        
            return Singleton.demoPage;
    }
}