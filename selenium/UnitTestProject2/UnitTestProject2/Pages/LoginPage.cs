using System;
using OpenQA.Selenium;

namespace UnitTestProject2.Pages
{
    class LoginPage
    {
        IWebDriver driver;
        public LoginPage(IWebDriver driver) => this.driver = driver;

        IWebElement UserNameElement => driver.FindElement(By.Id("usernameOrEmail"));
        IWebElement ContinueButton => driver.FindElement(By.TagName("Button"));
        IWebElement PasswordElement => driver.FindElement(By.Id("password"));
        IWebElement LoginButton => driver.FindElement(By.TagName("Button"));

        public void SetUserName(string userName)
        {
            UserNameElement.Clear();
            UserNameElement.SendKeys(userName);
        }

        public void ClickOnContinueButton()
        {
            ContinueButton.Click();
            System.Threading.Thread.Sleep(2 * 1000);
        }

        public void SetPassword(String password)
        {
            PasswordElement.Clear();
            PasswordElement.SendKeys(password);
        }

        public void ClickOnLoginButton()
        {
		    LoginButton.Click();
            System.Threading.Thread.Sleep(2 * 1000);
        }
    }
}
