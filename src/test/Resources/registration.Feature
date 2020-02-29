Feature: registration Functionality
  Background:
    Given I am on indiancouture landing page
    When I click register link text
    Then I should navigate to register page


  Scenario Outline: Register  with valid credential

    And I enter valid "<first name>" "<last name>" "<email address>" "<password>" "<re-type password>"
    And I click on open an account button
    Then I should successfully login see welcome message
    Examples:
    |first name  |last name   |email address  |password  |re-type password  |
    |Neelraj     |Pothiwala   |xyz@test.com   |Neelraj11 |Neelraj11         |

  Scenario Outline : Register with in valid credential

    And I enter in-valid "<first name>" "<last name>" "<email address>" "<password>" "<re-type password>"
    Then I should see error message
    Then I should see error message
    Examples:
      |first name  |last name   |email address  |password  |re-type password  |
      |Neelraj     |Pothiwala   |xyztest.com    |23        |29                |


