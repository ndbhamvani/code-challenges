import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webui.common.WebUiCommonHelper as WebUiCommonHelper
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.WebElement as WebElement
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://www.google.com/')

WebUI.setText(findTestObject('Page_Google/input_Sign in_q'), 'Spider-Man')

WebUI.sendKeys(findTestObject('Page_Google/input_Sign in_q'), Keys.chord(Keys.ENTER))

WebUI.delay(2)

title = WebUI.getWindowTitle()

WebUI.verifyMatch(title, 'Spider-Man - Google Search', true)

List<WebElement> links = WebUiCommonHelper.findWebElements(findTestObject('Google_Search/div_header_links'), 10)

println(links)

while (links.size() > 0) {
    links.get(0).click()

    WebUI.delay(2)

    links = WebUiCommonHelper.findWebElements(findTestObject('Google_Search/div_header_links'), 10)
}

WebUI.closeBrowser()

