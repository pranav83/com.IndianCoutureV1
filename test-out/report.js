$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/ChristmasGig.feature");
formatter.feature({
  "line": 2,
  "name": "Donation Form",
  "description": "",
  "id": "donation-form",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sh-donationform"
    }
  ]
});
formatter.before({
  "duration": 9329406400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Donate amount through donation form",
  "description": "",
  "id": "donation-form;donate-amount-through-donation-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Christmas Gig page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I choose donate amount",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on donate button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to donation form",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"email\" \"title\" \"firstname\" \"lastname\" \"mobileno\" \"address1\" \"address2\" \"city\" \"postcode\" \"country\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I give marketing consent \"phone\" \"email\" \"post\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select debit card payment",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select card type",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I provide card number",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select expiry date",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I provide security code",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on donate now button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_am_on_Christmas_Gig_page()"
});
formatter.result({
  "duration": 1809061700,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_choose_donate_amount()"
});
formatter.result({
  "duration": 114391100,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.click_on_donate_button()"
});
formatter.result({
  "duration": 814673400,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_navigate_to_donation_form()"
});
formatter.result({
  "duration": 554578300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 9
    },
    {
      "val": "title",
      "offset": 17
    },
    {
      "val": "firstname",
      "offset": 25
    },
    {
      "val": "lastname",
      "offset": 37
    },
    {
      "val": "mobileno",
      "offset": 48
    },
    {
      "val": "address1",
      "offset": 59
    },
    {
      "val": "address2",
      "offset": 70
    },
    {
      "val": "city",
      "offset": 81
    },
    {
      "val": "postcode",
      "offset": 88
    },
    {
      "val": "country",
      "offset": 99
    }
  ],
  "location": "ChristmasGigStepDefs.i_enter(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1221660700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 26
    },
    {
      "val": "email",
      "offset": 34
    },
    {
      "val": "post",
      "offset": 42
    }
  ],
  "location": "ChristmasGigStepDefs.i_give_marketing_consent(String,String,String)"
});
formatter.result({
  "duration": 255273300,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_select_debit_card_payment()"
});
formatter.result({
  "duration": 62189500,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_select_card_type()"
});
formatter.result({
  "duration": 105146800,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_provide_card_number()"
});
formatter.result({
  "duration": 118269600,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_select_expiry_date()"
});
formatter.result({
  "duration": 168490400,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_provide_security_code()"
});
formatter.result({
  "duration": 53836300,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_click_on_donate_now_button()"
});
formatter.result({
  "duration": 139685300,
  "status": "passed"
});
formatter.match({
  "location": "ChristmasGigStepDefs.i_should_see_the_error_message()"
});
formatter.result({
  "duration": 36045500,
  "status": "passed"
});
formatter.after({
  "duration": 746343300,
  "status": "passed"
});
});