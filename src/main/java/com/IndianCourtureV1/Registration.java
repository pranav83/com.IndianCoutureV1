package com.IndianCourtureV1;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Registration extends BaseMain {

    public Registration(){
        PageFactory.initElements(driver,this);
    }
    @FindBy(xpath = "//button[contains(text(),'Dismiss')]")
    private WebElement dismiss_Button;
    @FindBy(xpath = "//a[contains(text(),'Register')]")
    private WebElement register_link;
    @FindBy(xpath = "//h3[contains(text(),'NEW CUSTOMER')]")
    private WebElement text_Newcustomer;
    @FindBy(xpath = "//input[@id='first_name']")
    private WebElement text_Firstname;
    @FindBy(xpath = "//input[@id='surname']")
    private WebElement text_Lastname;
    @FindBy(xpath = "//input[@id='email']")
    private WebElement text_email;
    @FindBy(xpath = "//input[@id='password-red']")
    private WebElement text_Password;
    @FindBy(xpath = "//input[@id='password1']")
    private WebElement text_RetypePassword;
    @FindBy(xpath = "//button[contains(text(),'Open an Account')]")
    private WebElement btn_OpenAccount;
    @FindBy(xpath = "//label[@id='email-error']")
    private WebElement text_Error;

    public void navigateTo(){
        driver.get("https://indiancouture.co.za/");
    }

    public void Dismiss_Button()
    {
        dismiss_Button.click();
    }

    public void clickonRegister(){register_link.click();}

    public boolean verifyTextNewCustomer(){
        Assert.assertTrue(text_Newcustomer.isDisplayed());
        return true;
    }
    public void enterValidCredential(String Firstname,String Lastname,String email,String password,String retypePass){
        text_Firstname.sendKeys(Firstname);
        text_Lastname.sendKeys(Lastname);
        text_email.sendKeys(email);
        text_Password.sendKeys(password);
        text_RetypePassword.sendKeys(retypePass);
    }
    public void clickSubmit(){
        btn_OpenAccount.click();
    }
    public boolean text_EmailInValid() throws InterruptedException {
        Thread.sleep(800);
        Assert.assertTrue( text_Error.isDisplayed());
        return true;
    }



}
