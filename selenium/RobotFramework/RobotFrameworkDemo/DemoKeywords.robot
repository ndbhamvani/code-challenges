*** Keywords ***
Open Browser To Login Page
    Open Browser    ${URL}    ${BROWSER}
    Title Should Be    The Internet