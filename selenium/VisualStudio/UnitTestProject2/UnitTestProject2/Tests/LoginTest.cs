using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using UnitTestProject2.Pages;

namespace UnitTestProject2
{
    [TestClass]
    public class LoginTest
    {
        IWebDriver driver = new ChromeDriver();
        HomePage hPage;
        LoginPage lPage;

        [TestInitialize]
        public void Init()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://wordpress.com/");

            hPage = new HomePage(driver);
            lPage = new LoginPage(driver);

            hPage.ClickOnLoginLink();
        }

        [TestCleanup]
        public void TearDown()
        {
            driver.Close();
        }

        [TestMethod]
        public void ValidCredentials()
        {
            lPage.SetUserName("WORDPRESS EMAIL");
            lPage.ClickOnContinueButton();
            lPage.SetPassword("WORDPRESS PASSWORD");
            lPage.ClickOnLoginButton();
        }

        [TestMethod]
        public void InvalidCredentialsNumbers()
        {
            lPage.SetUserName("676768765556569");
            lPage.ClickOnContinueButton();
        }

        [TestMethod]
        public void InvalidCredentialsSymbols()
        {
            lPage.SetUserName("$%$^&&*%%*");
            lPage.ClickOnContinueButton();       
        }
    }
}
