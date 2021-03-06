*** Keywords ***
Open Browser To Login Page And Click First Link
    Open Browser    ${URL}    ${BROWSER}
    Title Should Be    The Internet	
    Click Link    ${ABTEST}
    Sleep    2s
    
       