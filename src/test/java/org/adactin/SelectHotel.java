package org.adactin;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel extends Base {
	public SelectHotel() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "radiobutton_0")
	private WebElement radioButton;
	@FindBy(id = "continue")
	private WebElement next;

	public WebElement getRadioButton() {
		return radioButton;
	}

	public WebElement getNext() {
		return next;
	}

	public void selecthotel() {
		click(getRadioButton());
		click(getNext());
	}
}
