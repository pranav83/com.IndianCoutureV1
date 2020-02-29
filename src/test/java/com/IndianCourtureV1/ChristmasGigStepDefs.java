package com.IndianCourtureV1;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ChristmasGigStepDefs {

    ChristmasGigs cg = new ChristmasGigs();

    @Given("^I am on Christmas Gig page$")
    public void i_am_on_Christmas_Gig_page() throws Throwable {
        cg.navigateTo();
        Assert.assertTrue(cg.christmasGig());
    }

    @When("^I choose donate amount$")
    public void i_choose_donate_amount() throws Throwable {
        cg.donatePounnds10();
    }

    @When("^click on donate button$")
    public void click_on_donate_button() throws Throwable {
        cg.donateNowButton();
    }

    @Then("^I navigate to donation form$")
    public void i_navigate_to_donation_form() throws Throwable {
        Assert.assertTrue(cg.setYourDonation());
    }

    @Then("^I enter \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void i_enter(String email, String title, String firstname, String lastname, String mobileno, String address1, String address2, String city, String postcode, String country) throws Throwable {
        cg.emailBox(email);
        cg.titleSelect();
        cg.setFirstName(firstname);
        cg.setLastName(lastname);
        cg.setEnterMobile(mobileno);
        cg.setEnterAddress1(address1);
        cg.setEnterAddress2(address2);
        cg.setEnterCity(city);
        cg.setEnterPostcode(postcode);
        cg.setEnterCountry(country);
    }

    @Then("^I give marketing consent \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void i_give_marketing_consent(String arg1, String arg2, String arg3) throws Throwable {
        cg.setPhoneCheckBox();
        cg.setEmailCheck();
        cg.setTextCheck();
    }

    @Then("^I select debit card payment$")
    public void i_select_debit_card_payment() throws Throwable {
        cg.setDebitCardCheck();
    }

    @Then("^I select card type$")
    public void i_select_card_type() throws Throwable {
        cg.setCardType();
    }

    @Then("^I provide card number$")
    public void i_provide_card_number() throws Throwable {
        cg.setCardNumber();
    }

    @Then("^I select expiry date$")
    public void i_select_expiry_date() throws Throwable {
        cg.setCardMonth();
        cg.setCardYear();
    }

    @Then("^I provide security code$")
    public void i_provide_security_code() throws Throwable {
        cg.setCardScode();
    }

    @Then("^I click on donate now button$")
    public void i_click_on_donate_now_button() throws Throwable {
        cg.setCardSubmitButton();
    }

    @Then("^I should see the error message$")
    public void i_should_see_the_error_message() throws Throwable {
        Assert.assertTrue(cg.setErrorMessage());
    }

}
