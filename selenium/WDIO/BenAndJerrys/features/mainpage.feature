Feature: Ben and Jerry's Order Now Dialogue Box

@home
Scenario Outline: As a user, I can access the homepage and dismiss sticky dialogue box

    Given I am on the home page
    When I click on the orderNowClose button on the home page
    Then the home page orderNow element no longer appears


@ordernow
Scenario Outline: As a user, I can access the Instant Delivery page when clicking 'Order Now' on sticky dialogue box 

    Given I am on the home page
    When I click on the orderNow button on the home page
    Then the user is presented with Ben & Jerry’s Instant Delivery page