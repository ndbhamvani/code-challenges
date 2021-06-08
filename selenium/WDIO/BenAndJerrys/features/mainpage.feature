Feature: Testing Ben and Jerry's homepage

@home
Scenario Outline: As a user, I can access the homepage and dismiss the sticky dialogue box

    Given I am on the home page
    When I click on the stickyFooter-close button on the home page
    Then the stickyFooter no longer appears on the home page