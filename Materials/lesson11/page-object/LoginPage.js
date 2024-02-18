import { BasePage } from "./BasePage"

export class LoginPage extends BasePage{
    constructor(page){
        super(page)
        this.emailField = page.locator("//input[@id='userName']")
        this.passwordField = page.locator("//input[@id='password']")
        this.submitButton = page.locator("//button[@id='login']")

    }

    async login(){
        await this.emailField.fill("SMT")
        await this.passwordField.fill("SMT")
        await this.submitButton.click()
    }
}