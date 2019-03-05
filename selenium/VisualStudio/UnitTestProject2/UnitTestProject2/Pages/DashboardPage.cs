using OpenQA.Selenium;

namespace UnitTestProject2.Pages
{
    class DashboardPage
    {
        IWebDriver driver;
        public DashboardPage(IWebDriver driver)
        {
            this.driver = driver;
        }

        public void CLickProfileIcon()
        {
            IWebElement ProfileButton = driver.FindElement(By.XPath("//*[@id=\"header\"]/a[3]"));
            ProfileButton.Click();
            System.Threading.Thread.Sleep(2 * 1000);
        }
    }
}
