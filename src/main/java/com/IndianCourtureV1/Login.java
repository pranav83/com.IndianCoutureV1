package com.IndianCourtureV1;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login extends BaseMain
{
    public Login()
    {
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//button[contains(text(),'Dismiss')]")
    private WebElement dismiss_Button;
    @FindBy(xpath = "//a[contains(text(),'Sign-in')]")
    private WebElement sign_in;
    @FindBy(xpath = "//h3[contains(text(),'RETURNING CUSTOMER')]")
    private WebElement verifyReturnCustomer;
    @FindBy(xpath = "//input[@id='username']")
    private WebElement enter_Username;
    @FindBy(xpath = "//input[@id='password']")
    private WebElement enter_Password;
    @FindBy(xpath = "//button[contains(text(),'Login')]")
    private WebElement login_Button;
    @FindBy(xpath = "//h1[contains(text(),'Open Orders')]")
    private WebElement verify_User_login;
    @FindBy(xpath = "//label[@id='username-error']")
    private WebElement error_Message;
    @FindBy(xpath = "//h4[contains(text(),'Sign-in Failed')]")
    private WebElement sigin_In_Failed;

    public void navigateTo(){
        driver.get("https://indiancouture.co.za/");
    }

    public void Dismiss_Button()
    {
        dismiss_Button.click();
    }
    public void clickOnSignIn()
    {
        sign_in.click();
    }
    public boolean isLandedOnPage() throws InterruptedException {
        Thread.sleep(800);
        Assert.assertTrue(verifyReturnCustomer.isDisplayed());
        return true;
    }
    public void enter_Username(String username)
    {
        enter_Username.sendKeys(username);
    }
    public void enter_Password(String password)
    {
        enter_Password.sendKeys(password);
    }
    public void login_Button()
    {
        login_Button.click();
    }
    public boolean verify_User_login()
    {
        Assert.assertTrue(verify_User_login.isDisplayed());
        return true;
    }
    public boolean error_Message()
    {
       Assert.assertTrue( error_Message.isDisplayed());
       return true;
    }
    public boolean sigin_In_Failed() throws InterruptedException {
        Thread.sleep(800);
       Assert.assertTrue( sigin_In_Failed.isDisplayed());
       return true;
    }
}
