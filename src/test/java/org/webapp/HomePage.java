package org.webapp;

import org.adactin.Base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Base{
	
	public HomePage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//a[text()='Restaurant']")
	private WebElement homePageLogo;

	@FindBy(xpath = "//a[text()='RESERVATION']")
	private WebElement reservationMenu;

	public WebElement getHomePageLogo() {
		return homePageLogo;
	}

	public void setHomePageLogo(WebElement homePageLogo) {
		this.homePageLogo = homePageLogo;
	}

	public WebElement getreservationMenu() {
		return reservationMenu;
	}

	public void setContactMenu(WebElement contactMenu) {
		this.reservationMenu = contactMenu;
	}


}
