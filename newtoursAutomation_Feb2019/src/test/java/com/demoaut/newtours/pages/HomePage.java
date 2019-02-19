package com.demoaut.newtours.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage {
	
WebDriver driver;
	
	public HomePage(WebDriver driver) {
		
		this.driver = driver;
		
	}
	
	public void ClickOnRegLink() throws InterruptedException {
		
		WebElement ClickOnRegLink = driver.findElement(By.linkText("REGISTER"));
		ClickOnRegLink.click();
		
	}

}
