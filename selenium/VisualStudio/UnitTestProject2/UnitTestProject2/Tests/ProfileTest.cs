using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using UnitTestProject2.Pages;

namespace UnitTestProject2.Tests
{
    [TestClass]
    public class ProfileTest
    {
        private IWebDriver driver = new ChromeDriver();
        private HomePage hPage;
        private LoginPage lPage;
        private DashboardPage dPage;
        private ProfilePage pPage;

        [TestInitialize]
        public void Init()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://wordpress.com/");

            hPage = new HomePage(driver);
            lPage = new LoginPage(driver);
            dPage = new DashboardPage(driver);
            pPage = new ProfilePage(driver);

            hPage.ClickOnLoginLink();
        }

        [TestCleanup]
        public void TearDown()
        {
            driver.Close();
        }

        [TestMethod]
        public void TestUpdateProfile()
        {

            lPage.SetUserName("sudheerkumar.gv@gmail.com");
            lPage.ClickOnContinueButton();
            lPage.SetPassword("kumar@123");
            lPage.ClickOnLoginButton();

            dPage.CLickProfileIcon();

            pPage.EnterFirstName("Nitin");
            pPage.EnterLastName("Bham");
            pPage.EnterDisplayName("Nitin-Selenium");
            pPage.EnterAboutMe("Just testing");
            pPage.ClickSaveProfileButton();

        }


    }
}
