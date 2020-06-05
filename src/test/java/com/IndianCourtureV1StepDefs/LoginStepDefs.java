package com.IndianCourtureV1StepDefs;

import com.IndianCourtureV1.BaseMain;
import com.IndianCourtureV1.Login;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefs extends BaseMain
{
    Login lg = new Login();

    @Given("^I am on indiancouture landing page$")
    public void i_am_on_indiancouture_landing_page()
    {
        lg.navigateTo();
     lg.Dismiss_Button();

    }

    @When("^I click sign-in link text$")
    public void i_click_sign_in_link_text()
    {
      lg.clickOnSignIn();
    }

    @Then("^I should navigate to sign-in page$")
    public void i_should_navigate_to_sign_in_page() throws InterruptedException {
        Assert.assertTrue(lg.isLandedOnPage());
    }

    @Then("^I enter valid credential\"([^\"]*)\"\"([^\"]*)\"$")
    public void i_enter_valid_credential(String Username, String Password)
    {
     lg.enter_Username(Username);
     lg.enter_Password(Password);
    }

    @Then("^I click on log-in button$")
    public void i_click_on_log_in_button()
    {
        lg.login_Button();
    }

    @Then("^I should see welcome message$")
    public void i_should_see_welcome_message()
    {
      lg.verify_User_login();
    }

    @Then("^I enter in-valid credentail \"([^\"]*)\"\"([^\"]*)\"$")
    public void i_enter_in_valid_credentail(String Username, String Password)
    {
       lg.enter_Username(Username);
       lg.enter_Password(Password);
    }

    @Then("^I should see error message$")
    public void i_should_see_error_message()
    {
     lg.error_Message();
    }

    @Then("^I enter valid \"([^\"]*)\"$")
    public void i_enter_valid(String Username)
    {
      lg.enter_Username(Username);
    }

    @Then("^I enter in-valid\"([^\"]*)\"$")
    public void i_enter_in_valid(String Password)
    {
        lg.enter_Password(Password);
    }

    @Then("^I should see error in the box sign-in failed$")
    public void i_should_see_error_in_the_box_sign_in_failed() throws InterruptedException {
       lg.sigin_In_Failed();
    }
}
