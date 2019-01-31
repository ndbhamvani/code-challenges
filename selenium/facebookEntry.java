/*
Simply open up Chrome browser and open facebook homepage. 
Select all page web elements and enter details.
Finally, click 'Submit' button.
*/


package com.java.examples;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;


public class facebookTestClass {
	
public static void main(String[] args) {
		
		//Set the system property
			System.setProperty("webdriver.chrome.driver", "D:\\Training-videos\\chromedriver.exe");
		
		//Instantiate the Chrome Driver class
			ChromeDriver Driver = new ChromeDriver();
		
		//To Load the FaceBook URL
			String url = "https://www.facebook.com/";
			Driver.get(url);
		
		//To maximize the browser
			Driver.manage().window().maximize();
		
		//Finding the WebElements in the FaceBook for First Name
			WebElement firstName = Driver.findElement(By.name("firstname"));
			firstName.clear();
			firstName.sendKeys("Test");
		
		//Finding the WebElements in the FaceBook for Last Name
			WebElement lastName = Driver.findElement(By.name("lastname"));
			lastName.clear();
			lastName.sendKeys("One");
		
		//Finding the WebElements in the FaceBook for Registered Email id
			WebElement regEmail = Driver.findElement(By.name("reg_email__"));
			regEmail.clear();
			regEmail.sendKeys("Test@gmail.com");
		
		//Finding the WebElements in the FaceBook for Confirm Registered Email id
			WebElement confirmRegEmail = Driver.findElement(By.name("reg_email_confirmation__"));
			confirmRegEmail.clear();
			confirmRegEmail.sendKeys("Test@gmail.com");
		
		//Finding the WebElements in the FaceBook for Registered Password		
			WebElement regPassWord = Driver.findElement(By.name("reg_passwd__"));
			regPassWord.clear();
			regPassWord.sendKeys("Test@12345");

		//Finding the WebElements for Select option		
			WebElement birthMonth = Driver.findElement(By.name("birthday_month"));
			Select selectMonth = new Select(birthMonth);
			selectMonth.selectByValue("8");
			
		//Finding the WebElements for Select option	 Birht Day	
			WebElement birthDay = Driver.findElement(By.name("birthday_day"));
			Select selectDay = new Select(birthDay);
			selectDay.selectByValue("20");
			
		//Finding the WebElements for Select option	 Birth year	
			WebElement birthYear = Driver.findElement(By.name("birthday_year"));
			Select selectYear = new Select(birthYear);
			selectYear.selectByValue("1987");
			
		//Radio Button for Gender
			WebElement male= Driver.findElement(By.id("u_0_a"));
			
			male.click();
			
		//Finding the WebElements for Select option Birth year	
			WebElement submit = Driver.findElement(By.name("websubmit"));
			submit.click();	
			
	}

}
