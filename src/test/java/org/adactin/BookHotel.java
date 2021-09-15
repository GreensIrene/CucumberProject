package org.adactin;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookHotel extends Base {
	public BookHotel() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "first_name")
	private WebElement fisrtName;
	@FindBy(id = "last_name")
	private WebElement lastName;
	@FindBy(id = "address")
	private WebElement address;
	@FindBy(id = "cc_num")
	private WebElement ccnumber;
	@FindBy(id = "cc_type")
	private WebElement ccType;
	@FindBy(id = "cc_exp_month")
	private WebElement ccExpMonth;
	@FindBy(id = "cc_exp_year")
	private WebElement ccExpYear;
	@FindBy(id = "cc_cvv")
	private WebElement cvv;
	@FindBy(id = "book_now")
	private WebElement booknow;

	public WebElement getFisrtName() {
		return fisrtName;
	}

	public WebElement getLastName() {
		return lastName;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCcnumber() {
		return ccnumber;
	}

	public WebElement getCcType() {
		return ccType;
	}

	public WebElement getCcExpMonth() {
		return ccExpMonth;
	}

	public WebElement getCcExpYear() {
		return ccExpYear;
	}

	public WebElement getCvv() {
		return cvv;
	}

	public WebElement getBooknow() {
		return booknow;
	}

	public void bookHotel(String firstname, String lastname, String address, String ccnum, String cctype,
			String ccexpmonth, String ccexpyear, String cvv) {
		type(getFisrtName(), firstname);
		type(getLastName(), lastname);
		type(getAddress(), address);
		type(getCcnumber(), ccnum);
		selectOption(getCcType(), cctype, "Text");
		selectOption(getCcExpMonth(), ccexpmonth, "text");
		selectOption(getCcExpYear(), ccexpyear, "Text");
		type(getCvv(), cvv);
		click(getBooknow());
	}
}
