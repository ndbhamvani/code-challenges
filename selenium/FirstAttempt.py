# My very first browser automation script, when learning Selenium.
# The idea was to create a script that will launch Firefox browser, go to google homepage, enter 'spiderman' as a search term 
# and then click on following links: 'Images,' 'Videos,' 'News' and 'Shopping' links.
# Once 'Shopping is clicked' then click repeatedly on the 'more' menu button.
# Finally, close the browser.

import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox(executable_path='./geckodriver')
driver.get('https://www.google.com')

# Locate search box element
search_box = driver.find_element_by_name('q')

time.sleep(2)

# Type in our search query into the search box
search_box.send_keys('spiderman' + Keys.RETURN)

time.sleep(3)
print(driver.title)

# Click all google links
count = 0
list_of_links = ['//*[@id="hdtb-msb-vis"]/div[2]/a',
                 '//*[@id="hdtb-msb-vis"]/div[3]/a',
                 '//*[@id="hdtb-msb-vis"]/div[4]/a',
                 '//*[@id="hdtb-msb-vis"]/div[5]/a']


for i in list_of_links:
        link = driver.find_element_by_xpath(i)
        link.click()
        time.sleep(3)
        count += 1
        if(count == 4):
            link = driver.find_element_by_id('ow6')
            click_count = 20
            while click_count > 1:
                link.click()
                click_count -= 1
                time.sleep(0.01)
time.sleep(5)
driver.quit()
