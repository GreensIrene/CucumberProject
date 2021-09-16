package com.stepdefinition;

import org.adactin.Base;
import org.webapp.ContactPage;
import org.webapp.HomePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ResStepDef extends Base {

	@Given("User land on restaurant application")
	public void user_land_on_restaurant_application() {
		loadUrl("http://192.168.90.44:8080/WebApp");

	}

	@Then("User verify the header logo present in page")
	public void user_verify_the_header_logo_present_in_page() {
		HomePage hm = new org.webapp.HomePage();
		hm.getHomePageLogo().isDisplayed();
	}

	@When("User click on contact us link")
	public void user_click_on_contact_us_link() {
		HomePage hm = new org.webapp.HomePage();
		hm.getreservationMenu().click();

	}

	@When("User Enter First Name")
	public void user_Enter_First_Name() {
		ContactPage cp = new ContactPage();
		cp.getFirstName().sendKeys("First User");
	}

	@When("User Enter Last Name")
	public void user_Enter_Last_Name() {
		ContactPage cp = new ContactPage();
		cp.getLastName().sendKeys("Last User");

	}

	@When("User Enter Phone Number")
	public void user_Enter_Phone_Number() {
		ContactPage cp = new ContactPage();
		cp.getPhone().sendKeys("123456789");

	}

	@When("User Enter Guest Number")
	public void user_Enter_Guest_Number() {

		ContactPage cp = new ContactPage();
		cp.getGuest().sendKeys("098765432");

	}

	@When("User Enter State")
	public void user_Enter_State() {
		ContactPage cp = new ContactPage();
		cp.getState().sendKeys("Chennai");

	}

	@When("User Enter Email")
	public void user_Enter_Email() {

		ContactPage cp = new ContactPage();
		cp.getEmail().sendKeys("test@gmail.com");

	}

	@When("User Enter Reservation Date")
	public void user_Enter_Reservation_Date() {
		ContactPage cp = new ContactPage();
		cp.getDatepicker().sendKeys("12/11/1234");

	}

	@When("User Enter Subject")
	public void user_Enter_Subject() {
		ContactPage cp = new ContactPage();
		cp.getSubject().sendKeys("Test SUbject");

	}

	@When("User click Reserve Button")
	public void user_click_Reserve_Button() throws InterruptedException {

		ContactPage cp = new ContactPage();
		cp.getReserveBtn().click();
		Thread.sleep(2000);

	}

	@Then("User success message in the next page")
	public void user_success_message_in_the_next_page() {

		ContactPage cp = new ContactPage();
		String text = cp.getMessage().getText();
		System.out.println(text);

	}

}
