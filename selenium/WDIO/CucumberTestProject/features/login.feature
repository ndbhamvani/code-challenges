Feature: Testing the Login page
  @login
  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

  @test
  Scenario Outline: As a user, I can access main page and click on dropdown link

    Given I am on the main page
    When I click the dropdown link on the main page
    Then The header should say: Dropdown List


  
  Scenario Outline: As a user, I can access dropdown page and select a dropdown option

    Given I am on the dropdown page
    When I select option <value> on the dropdown menu
    Then the dropdown text for selected option <value> should say: <selectionText>

    Examples:
      | value | selectionText |
      | 1      | Option 1  |
      | 2      | Option 2  |


  Scenario Outline: As a user, I can access the Add/Remove Elements page and click relevant buttons

    Given I am on the main page
    When I click the dropdown link on the main page
    Then the dropdown text for selected option <value> should say: <selectionText>

  