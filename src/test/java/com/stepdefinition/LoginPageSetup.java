package com.stepdefinition;

import org.adactin.Base;
import org.adactin.BookHotel;
import org.adactin.BookingConfirmation;
import org.adactin.Login;
import org.adactin.SearchHotel;
import org.adactin.SelectHotel;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageSetup extends Base {
	@Given("user is on the Adactin Login page")
	public void user_is_on_the_Adactin_Login_page() {
		getDriver();
		loadUrl("https://adactinhotelapp.com/");
	}

	@When("user should login {string} and {string}")
	public void user_should_login_and(String userName, String Password) {
		Login login = new Login();
		login.login(userName, Password);
	}

	@When("user should enter the Hotel details to search {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string}")
	public void user_should_enter_the_Hotel_details_to_search(String location, String hotel, String roomType,
			String roomNo, String checkInDate, String checkOutDate, String adultsPerRoom, String childrensPerRoom) {
		SearchHotel hotelpage = new SearchHotel();
		hotelpage.hotelsearch(location, hotel, roomType, roomNo, checkInDate, checkOutDate, adultsPerRoom,
				childrensPerRoom);
	}

	@When("user should confirm the details")
	public void user_should_confirm_the_details() {
		SelectHotel hotel = new SelectHotel();
		hotel.selecthotel();
	}

	@When("user sholud confim the names and payment details {string}and {string} and {string} and {string} and {string} and {string} and {string} and {string}")
	public void user_sholud_confim_the_names_and_payment_details(String firstname, String lastname, String address,
			String ccnum, String cctype, String ccexpmonth, String ccexpyear, String cvv) {
		BookHotel bookHotel = new BookHotel();
		bookHotel.bookHotel(firstname, lastname, address, ccnum, cctype, ccexpmonth, ccexpyear, cvv);
	}

	@Then("user should verify success message")
	public void user_should_verify_success_message() {
		BookingConfirmation bookingConfirmation = new BookingConfirmation();
		bookingConfirmation.orderidprint();
		closeAllwindow();
	}

}
