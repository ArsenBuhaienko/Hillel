import { test } from '@playwright/test';
import { LoginPage } from '../page-object/LoginPage';

test.describe("E2E Tests",()=>{
    test("Login",async({page})=>{
        let loginPage = new LoginPage(page)
        await loginPage.visit("https://demoqa.com/login")
        await loginPage.login()

    })
    test("Logout",()=>{
        
    })
    test("SMT",()=>{
        
    })
})