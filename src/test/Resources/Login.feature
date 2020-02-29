@SanityPack
Feature: login Functionality
  Background:
    Given I am on indiancouture landing page
    When I click sign-in link text
    Then I should navigate to sign-in page

  @Login
  Scenario Outline: login with valid credential
    And I enter valid credential"<Username>""<Password>"
    And I click on log-in button
    Then I should see welcome message

    Examples:
    |Username            |Password      |
    |ppothiwala@gmail.com|Neelraj11     |

  @Login1
  Scenario Outline:login with in-valid user name

    And I enter in-valid credentail "<Username>""<Password>"
    Then I should see error message
    Examples:
      |Username         |Password     |
      |hellohihowru     |Neelraj11    |

  @Login2
  Scenario Outline:login with in-valid password

    And I enter valid "<Username>"
    And I enter in-valid"<Password>"
    And I click on log-in button
    Then I should see error in the box sign-in failed
    Examples:
    |Username             |Password   |
    |ppothiwala@gmail.com |123xyzefg  |

