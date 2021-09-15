package org.adactin;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login extends Base {
	public Login() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "username")
	private WebElement txtUser;
	@FindBy(id = "password")
	private WebElement txtPass;
	@FindBy(id = "login")
	private WebElement btnlogin;

	public WebElement getTxtUser() {
		return txtUser;
	}

	public WebElement getTxtPass() {
		return txtPass;
	}

	public WebElement getBtnlogin() {
		return btnlogin;
	}

	public void login(String userName, String Password) {
		type(getTxtUser(), userName);
		type(getTxtPass(), Password);
		click(getBtnlogin());
	}
}
