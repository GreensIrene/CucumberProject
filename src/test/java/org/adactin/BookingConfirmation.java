package org.adactin;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingConfirmation extends Base {
	public BookingConfirmation() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id="order_no")
	private WebElement orderNo;

	

	public WebElement getOrderNo() {
		return orderNo;
	}



	public void orderidprint() {
		driver.manage().timeouts().pageLoadTimeout(100, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		String text = getAttribute(getOrderNo(), "value");
		System.out.println(text);
	}
}
