package com.demoaut.newtours.pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

public class RegisterPage {
	
	WebDriver driver;
	
	public RegisterPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void addContactInfo() {
		
		WebElement addFirstName = driver.findElement(By.name("firstName"));
		addFirstName.clear();
		addFirstName.sendKeys("Nitin");
		
		WebElement addLastName = driver.findElement(By.name("lastName"));
		addLastName.clear();
		addLastName.sendKeys("Bhamvani");
		
		WebElement addPhoneNumber = driver.findElement(By.name("phone"));
		addPhoneNumber.clear();
		addPhoneNumber.sendKeys("457543265436");
		
		WebElement addEmailAdd = driver.findElement(By.id("userName"));
		addEmailAdd.clear();
		addEmailAdd.sendKeys("ndb@someaddress.com");
		
	}
	
	public void addMailingInfo() {
		
		WebElement addMailAddress1 = driver.findElement(By.name("address1"));
		addMailAddress1.clear();
		addMailAddress1.sendKeys("13 Brook St");
		
		WebElement addMailAddress2 = driver.findElement(By.name("address2"));
		addMailAddress2.clear();
		addMailAddress2.sendKeys("Meadow Hill");
		
		WebElement addCity = driver.findElement(By.name("city"));
		addCity.clear();
		addCity.sendKeys("Austin");
		
		WebElement addState = driver.findElement(By.name("state"));
		addState.clear();
		addState.sendKeys("Texas");
		
		WebElement addPostalCode = driver.findElement(By.name("postalCode"));
		addPostalCode.clear();
		addPostalCode.sendKeys("7634749");
		
		WebElement countryName = driver.findElement(By.name("country"));
		Select sel = new Select(countryName);
		sel.selectByValue("56");
		
	}
	
	public void addUserInfo() {
		
		WebElement addEmail = driver.findElement(By.id("email"));
		addEmail.clear();
		addEmail.sendKeys("abd@123.com");
		
		WebElement addPassword = driver.findElement(By.name("password"));
		addPassword.clear();
		addPassword.sendKeys("abcdefg");
		
		WebElement addConfirmPassword = driver.findElement(By.name("confirmPassword"));
		addConfirmPassword.clear();
		addConfirmPassword.sendKeys("abcdefg");
		
	}
	
	public void clickSubmitButton() throws InterruptedException {
		
		WebElement submitButton = driver.findElement(By.name("register"));
		submitButton.click();
		Thread.sleep(3*1000);
		
		boolean validationText = driver.getPageSource().contains("Thank you for registering");
		Assert.assertTrue(validationText);
	}
	
}
