using System;
using OpenQA.Selenium;

namespace UnitTestProject2.Pages
{
    class ProfilePage
    {
        IWebDriver driver;
        public ProfilePage(IWebDriver driver) => this.driver = driver;

        IWebElement FirstNameElement => driver.FindElement(By.Id("first_name"));
        IWebElement LastNameElement => driver.FindElement(By.Id("last_name"));
        IWebElement DisplayNameElement => driver.FindElement(By.Id("display_name"));
        IWebElement AboutMeElement => driver.FindElement(By.Name("description"));
        IWebElement SaveProfileButton => driver.FindElement(By.XPath("//*[@id=\"primary\"]/main/div[2]/form/p/button"));
        IWebElement NoticeTitle => driver.FindElement(By.XPath("//*[@id=\"notices\"]/div"));

        public void EnterFirstName(String firstName)
        {

            FirstNameElement.Clear();
            FirstNameElement.SendKeys(firstName);

        }

        public void EnterLastName(String lastName)
        {

            LastNameElement.Clear();
            LastNameElement.SendKeys(lastName);

        }

        public void EnterDisplayName(String displayName)
        {

            DisplayNameElement.Clear();
            DisplayNameElement.SendKeys(displayName);

        }

        public void EnterAboutMe(String aboutMe)
        {

            AboutMeElement.Clear();
            AboutMeElement.SendKeys(aboutMe);

        }


        public void ClickSaveProfileButton()
        {
		
		    if (SaveProfileButton.Enabled) {
                SaveProfileButton.Click();
                System.Threading.Thread.Sleep(2 * 1000);

                if (NoticeTitle.Displayed)
                {
                    Console.WriteLine("Successful Profile Change!");
                }

            }
		    else {
                Console.WriteLine("Profile Change Failed! Please change details and try again.");
            }
        }

}
}
