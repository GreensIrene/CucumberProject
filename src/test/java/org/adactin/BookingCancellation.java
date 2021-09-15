package org.adactin;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingCancellation extends Base {
	public BookingCancellation() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//a[text()='Booked Itinerary']")
	private WebElement BookedItinerary;
	@FindBy(id = "order_id_text")
	private WebElement Search;
	@FindBy(id = "search_hotel_id")
	private WebElement go;

	public WebElement getBookedItinerary() {
		return BookedItinerary;
	}

	public WebElement getSearch() {
		return Search;
	}

	public WebElement getGo() {
		return go;
	}

	public void bookingcancellation(String orderId) {
		click(getBookedItinerary());
		type(getSearch(), orderId);
		click(getGo());
	}
}
