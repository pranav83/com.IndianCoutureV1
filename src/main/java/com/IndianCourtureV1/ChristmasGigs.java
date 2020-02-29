package com.IndianCourtureV1;


import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class ChristmasGigs extends BaseMain {

    public ChristmasGigs() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//strong[contains(text(),'Christmas Gig')]")
    private WebElement christmasGig;
    @FindBy(xpath = "//input[@id='donate_pounds_10']")
    private WebElement donatePounnds10;
    @FindBy(xpath = "//input[@id='donate_pounds_5']")
    private WebElement donate£5;
    @FindBy(xpath = "//input[@id='donate_pounds_3']")
    private WebElement donateP£3;
    @FindBy(xpath = "//input[@name='submit']")
    private WebElement donateNowButton;
    @FindBy(xpath = "//h2[text()='Your donation']")
    private WebElement yourDonation;
    @FindBy(xpath = "//input[@id='email']")
    private WebElement emaiBox;
    @FindBy(xpath = "//input[@id='iscompany']")
    private WebElement checkBox;
    @FindBy(xpath = "//select[@id='civility']")
    private WebElement titleSelect;
    @FindBy(xpath = "//input[@id='firstname']")
    private WebElement firstName;
    @FindBy(xpath = "//input[@id='lastname']")
    private WebElement lastName;
    @FindBy(xpath = "//input[@name='reserved_mobile']")
    private WebElement enterMobile;
    @FindBy(xpath = "//input[@id='address1']")
    private WebElement enterAddress1;
    @FindBy(xpath = "//input[@id='address2']")
    private WebElement enterAddress2;
    @FindBy(xpath = "//input[@id='city']")
    private WebElement enterCity;
    @FindBy(xpath = "//input[@id='postcode']")
    private WebElement enterPostcode;
    @FindBy(xpath = "//select[@id='country']")
    private WebElement enterCountry;
    @FindBy(xpath = "//input[@id='reserved_weboptin']")
    private WebElement emailCheck;
    @FindBy(xpath = "//input[@id='reserved_phoneoptin']")
    private WebElement phoneCheckBox;
    @FindBy(xpath = "//input[@id='reserved_smsoptin']")
    private WebElement textCheck;
    @FindBy(xpath = "//input[@id='reserved_giftaidoptin']")
    private WebElement reservedGiftCheck;
    @FindBy(xpath = "//label[contains(text(),'Debit or credit card')]//input[@name='payment-method']")
    private WebElement debitCardCheck;
    @FindBy(xpath = "//label[contains(text(),'PayPal')]//input[@name='payment-method']")
    private WebElement paypalCheck;
    @FindBy(xpath = "//a[contains(text(),'What is PayPal?')]")
    private WebElement whatIsPaypal;
    @FindBy(xpath = "//select[@id='card']")
    private WebElement cardType;
    @FindBy(xpath = "//input[@id='cardnumber']")
    private WebElement cardNumber;
    @FindBy(xpath = "//select[@id='cardmonth']")
    private WebElement cardMonth;
    @FindBy(xpath = "//select[@id='cardyear']")
    private WebElement cardYear;
    @FindBy(xpath = "//input[@id='scode']")
    private WebElement cardScode;
    @FindBy(xpath = "//input[@id='card_submit']")
    private WebElement cardSubmitButton;
    @FindBy(xpath = "//h3[contains(text(),'an error has been found on the form')]")
    private WebElement errorMessage;


    public void navigateTo() {
        driver.get("https://england.shelter.org.uk/support_us/events/arts_and_entertainment/christmas_gig");
    }

    public boolean christmasGig() {
        Assert.assertTrue(christmasGig.isDisplayed());
        return true;
    }

    public void donatePounnds10() {
        donatePounnds10.click();
    }

    public void donateNowButton() {
        donateNowButton.click();
    }
    public boolean setYourDonation(){
        Assert.assertTrue(yourDonation.isDisplayed());
        return true;
    }

    public void emailBox(String email) {
        emaiBox.sendKeys(email);
    }

    public void titleSelect() {
        Select title = new Select(titleSelect);
        title.selectByVisibleText("Prof");
    }

    public void setFirstName(String firstname) {
        firstName.sendKeys(firstname);
    }

    public void setLastName(String lastname) {
        lastName.sendKeys(lastname);
    }

    public void setEnterMobile(String mobileno) {
        enterMobile.sendKeys(mobileno);
    }

    public void setEnterAddress1(String address1) {
        enterAddress1.sendKeys(address1);
    }

    public void setEnterAddress2(String address2) {
        enterAddress2.sendKeys(address2);
    }

    public void setEnterCity(String city) {
        enterCity.sendKeys(city);
    }

    public void setEnterPostcode(String postcode) {
        enterPostcode.sendKeys(postcode);
    }

    public void setEnterCountry(String country) {
        enterCountry.sendKeys(country);
    }

    public void setPhoneCheckBox() {
        phoneCheckBox.click();
    }

    public void setEmailCheck() {
        emailCheck.click();
    }

    public void setTextCheck() {
        textCheck.click();
    }
    public void setDebitCardCheck(){
        debitCardCheck.click();
    }
    public void setCardType(){
        Select ct = new Select(cardType);
        ct.selectByValue("maestro");
    }
    public void setCardNumber(){
        cardNumber.sendKeys("56565021224412");
    }
    public void setCardMonth(){
        Select cm = new Select(cardMonth);
        cm.selectByValue("10");
    }
    public void setCardYear () {
        Select cy= new Select(cardYear);
        cy.selectByVisibleText("2029");
    }
    public void setCardScode(){
        cardScode.sendKeys("569");
    }
    public void setCardSubmitButton(){
        cardSubmitButton.click();
    }
    public boolean setErrorMessage(){
        Assert.assertTrue(errorMessage.isDisplayed());
        return true;
    }
}