*** Settings ***
Library  SeleniumLibrary
Resource  DemoKeywords.robot
Test Teardown     Close All Browsers

*** Variables ***
${URL}          http://the-internet.herokuapp.com/
${BROWSER}      Firefox

*** Test Cases ***
The user can access website
    Open Browser To Login Page

