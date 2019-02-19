using OpenQA.Selenium;

namespace UnitTestProject2.Pages
{
    class HomePage
    {
        IWebDriver driver;

        public HomePage(IWebDriver driver)
        {
            this.driver = driver;
        }

        public void ClickOnLoginLink()
        {

            IWebElement loginLink = driver.FindElement(By.LinkText("Log In"));
            loginLink.Click();
            System.Threading.Thread.Sleep(2*1000);

        }


    }
}
