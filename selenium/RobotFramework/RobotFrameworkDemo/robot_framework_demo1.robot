*** Settings ***
Library  SeleniumLibrary
Resource  DemoKeywords.robot

*** Variables ***
${URL}          http://the-internet.herokuapp.com/
${BROWSER}      Firefox

*** Test Cases ***
The user can access website
    Open Browser To Login Page

