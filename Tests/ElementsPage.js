import { expect } from '@playwright/test';

export class ElementsPage{
    constructor(page){
        this.page = page

        this.expectedUrlElementsPage = "https://demoqa.com/elements"
        this.elementsPageLocator = page.locator("(//div[@class='avatar mx-auto white'])[1]")

        this.elementsSection = page.locator("(//span[@class='group-header'])[1]")
        this.elementsForms = page.locator("(//span[@class='group-header'])[2]")
        this.elementsAlerts = page.locator("(//span[@class='group-header'])[3]")
        this.elementsWidgets = page.locator("(//span[@class='group-header'])[4]")
        this.elementsInteractions = page.locator("(//span[@class='group-header'])[5]")
        this.elementsBookStoreApplication= page.locator("(//span[@class='group-header'])[6]")

        this.elementsBookStoreApplicationLogin = page.locator("(//li[@class='btn btn-light '])[30]")
        this.usernameInputField = page.locator("//input[@id='userName']")
        this.passwordInputField = page.locator("//input[@id='password']")
        this.logInButton = page.locator("//button[@id='login']")
        this.logOutButton = page.locator("(//button[@id='submit'])[1]")
        this.allertMessage = page.locator("//p[@class='mb-1']")

    }

    async openElementsPage(){
        await this.page.goto("https://demoqa.com")
        await this.elementsPageLocator.click()
        await expect(this.page.url()).toBe(this.expectedUrlElementsPage);
        await this.elementsSection.click()
        await this.elementsBookStoreApplication.click()
        await this.elementsBookStoreApplicationLogin.click()
    }

    async checkLoginPositive(userName, password){
        await this.usernameInputField.fill(userName)
        await this.passwordInputField.fill(password) 
        await this.logInButton.click()
        await expect (this.logOutButton).toBeVisible()
    }
    async checkLoginNegative(userName, password){
        await this.usernameInputField.fill(userName)
        await this.passwordInputField.fill(password) 
        await this.logInButton.click()
        await expect (this.allertMessage).toBeVisible()
    }

}