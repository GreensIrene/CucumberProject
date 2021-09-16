package org.webapp;

import org.adactin.Base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ContactPage extends Base {

	public ContactPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "first_name")
	private WebElement firstName;

	public WebElement getFirstName() {
		return firstName;
	}

	public void setFirstName(WebElement firstName) {
		this.firstName = firstName;
	}

	public WebElement getLastName() {
		return lastName;
	}

	public void setLastName(WebElement lastName) {
		this.lastName = lastName;
	}

	public WebElement getPhone() {
		return phone;
	}

	public void setPhone(WebElement phone) {
		this.phone = phone;
	}

	public WebElement getGuest() {
		return guest;
	}

	public void setGuest(WebElement guest) {
		this.guest = guest;
	}

	public WebElement getEmail() {
		return email;
	}

	public void setEmail(WebElement email) {
		this.email = email;
	}

	public WebElement getState() {
		return state;
	}

	public void setState(WebElement state) {
		this.state = state;
	}

	public WebElement getDatepicker() {
		return datepicker;
	}

	public void setDatepicker(WebElement datepicker) {
		this.datepicker = datepicker;
	}

	public WebElement getSubject() {
		return subject;
	}

	public void setSubject(WebElement subject) {
		this.subject = subject;
	}

	public WebElement getReserveBtn() {
		return reserveBtn;
	}

	public void setReserveBtn(WebElement reserveBtn) {
		this.reserveBtn = reserveBtn;
	}

	public WebElement getMessage() {
		return message;
	}

	public void setMessage(WebElement message) {
		this.message = message;
	}

	@FindBy(id = "last_name")
	private WebElement lastName;

	@FindBy(id = "phone")
	private WebElement phone;

	@FindBy(id = "guest")
	private WebElement guest;

	@FindBy(id = "email")
	private WebElement email;

	@FindBy(id = "state")
	private WebElement state;

	@FindBy(id = "datepicker")
	private WebElement datepicker;

	@FindBy(id = "subject")
	private WebElement subject;

	@FindBy(xpath = "//button[@id='submit' and text()='Reserve']")
	private WebElement reserveBtn;

	@FindBy(xpath = "//body/pre")
	private WebElement message;

}
