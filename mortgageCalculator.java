package com.java.examples;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class MyTestClass {
	
	public static void main(String[] args) {
		//Open the browser
		System.setProperty("webdriver.chrome.driver", "D:\\Training-videos\\chromedriver.exe");
		ChromeDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		
		//loded the url
		driver.get("https://www.mortgagecalculator.org/");
		
		//find the element HomeValue Text Field
		WebElement homeValueElement =  driver.findElement(By.id("homeval"));
		
		//Perform the action - enter text
		homeValueElement.clear();
		homeValueElement.sendKeys("1000");
		
		WebElement downPaymentElement =  driver.findElement(By.id("downpayment"));
		downPaymentElement.clear();
		downPaymentElement.sendKeys("2000");
		
		WebElement loanAmountElement =  driver.findElement(By.id("loanamt"));
		loanAmountElement.clear();
		loanAmountElement.sendKeys("5000");
		
		WebElement interestRateElement =  driver.findElement(By.id("intrstsrate"));
		interestRateElement.clear();
		interestRateElement.sendKeys("11");
		
		WebElement loanTermElement =  driver.findElement(By.id("loanterm"));
		loanTermElement.clear();
		loanTermElement.sendKeys("20");
		
		WebElement startDateElement = driver.findElement(By.name("param[start_month]"));
		Select select = new Select(startDateElement);
		select.selectByValue("7");
		
		WebElement startYearElement =  driver.findElement(By.id("start_year"));
		startYearElement.clear();
		startYearElement.sendKeys("2020");
		
		WebElement propertyTaxElement =  driver.findElement(By.id("pptytax"));
		propertyTaxElement.clear();
		propertyTaxElement.sendKeys("4000");
		
		WebElement pMiElement =  driver.findElement(By.id("pmi"));
		pMiElement.clear();
		pMiElement.sendKeys("2");
		
		WebElement homeInsuranceElement =  driver.findElement(By.id("hoi"));
		homeInsuranceElement.clear();
		homeInsuranceElement.sendKeys("2000");
		
		WebElement monthlyHoaElement =  driver.findElement(By.id("hoa"));
		monthlyHoaElement.clear();
		monthlyHoaElement.sendKeys("10");
		
		WebElement calButton = driver.findElement(By.name("cal"));
		calButton.click();
		
		//driver.close();
	}

}
