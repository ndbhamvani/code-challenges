package com.demoaut.newtours.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.demoaut.newtours.pages.RegisterPage;
import com.demoaut.newtours.pages.HomePage;

public class RegistrationTest {
	
	WebDriver driver;
	HomePage hPage;
	RegisterPage rPage;
	
	@BeforeMethod
	public void setup() throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver", "D:\\Training-videos\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		
		driver.get("http://newtours.demoaut.com/");
		Thread.sleep(3*1000);
		
		hPage = new HomePage(driver);
		rPage = new RegisterPage(driver);
	}
	
	
	@AfterMethod
	public void tearDown() {
		driver.close();
	}
	
	
	@Test
	public void Registration() throws InterruptedException {
		
		hPage.ClickOnRegLink();
		rPage.addContactInfo();
		rPage.addMailingInfo();
		rPage.addUserInfo();
		rPage.clickSubmitButton();
		
	}
	
}
