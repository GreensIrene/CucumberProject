package org.adactin;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel extends Base {
	public SearchHotel() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "location")
	private WebElement ddnLocation;
	@FindBy(id = "hotels")
	private WebElement ddnHotel;
	@FindBy(id = "room_type")
	private WebElement ddnRoomType;
	@FindBy(id = "room_nos")
	private WebElement ddnRoomNo;
	@FindBy(id = "datepick_in")
	private WebElement checkInDate;
	@FindBy(id = "datepick_out")
	private WebElement checkOutDate;
	@FindBy(id = "adult_room")
	private WebElement adultsPerRoom;
	@FindBy(id = "child_room")
	private WebElement ChildernsPerRoom;
	@FindBy(id = "Submit")
	private WebElement btnsearch;

	public WebElement getDdnLocation() {
		return ddnLocation;
	}

	public WebElement getDdnHotel() {
		return ddnHotel;
	}

	public WebElement getDdnRoomType() {
		return ddnRoomType;
	}

	public WebElement getDdnRoomNo() {
		return ddnRoomNo;
	}

	public WebElement getCheckInDate() {
		return checkInDate;
	}

	public WebElement getCheckOutDate() {
		return checkOutDate;
	}

	public WebElement getAdultsPerRoom() {
		return adultsPerRoom;
	}

	public WebElement getChildernsPerRoom() {
		return ChildernsPerRoom;
	}

	public WebElement getBtnsearch() {
		return btnsearch;
	}

	public void hotelsearch(String location, String hotel, String roomType, String roomNo, String checkInDate,
			String checkOutDate, String adultsPerRoom, String childrensPerRoom) {
		selectOption(getDdnLocation(), location, "Text");
		selectOption(getDdnHotel(), hotel, "Text");
		selectOption(getDdnRoomType(), roomType, "Text");
		selectOption(getDdnRoomNo(), roomNo, "Text");
		type(getCheckInDate(), checkInDate);
		type(getCheckOutDate(), checkOutDate);
		selectOption(getAdultsPerRoom(), adultsPerRoom, "Text");
		selectOption(getChildernsPerRoom(), childrensPerRoom, "Text");
		click(getBtnsearch());
	}
}
