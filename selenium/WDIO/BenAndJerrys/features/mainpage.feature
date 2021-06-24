Feature: Testing Ben and Jerry's homepage


Scenario Outline: As a user, I can access the homepage and dismiss sticky dialogue box

    Given I am on the home page
    When I click on stickyFooter-close on the home page
    Then the stickyFooter no longer appears on the home page


@home
Scenario Outline: As a user, I can access the Instant Delivery page when clicking 'Order Now' on sticky dialogue box 

    Given I am on the home page
    When I click on stickyFooter-button btn on the home page
    Then the user is presented with Ben & Jerry’s Instant Delivery page