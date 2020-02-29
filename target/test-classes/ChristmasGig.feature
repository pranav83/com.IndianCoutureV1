@sh-donationform
  Feature: Donation Form
Scenario: Donate amount through donation form

Given I am on Christmas Gig page
When I choose donate amount
And click on donate button
Then I navigate to donation form
And I enter "email" "title" "firstname" "lastname" "mobileno" "address1" "address2" "city" "postcode" "country"
And I give marketing consent "phone" "email" "post"
And I select debit card payment
And I select card type
And I provide card number
And I select expiry date
And I provide security code
And I click on donate now button
Then I should see the error message