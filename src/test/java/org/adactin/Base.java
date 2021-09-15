package org.adactin;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Base {
	
	public static WebDriver driver;
	JavascriptExecutor jk;

	public WebDriver getDriver() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		return driver;
	}

	public String readData(int rownum, int cellnum) throws Exception {
		String data = null;
		File file = new File("C:\\Users\\USER\\Eclipse\\Base\\Excel\\Test.xlsx");
		FileInputStream stream = new FileInputStream(file);
		Workbook book = new XSSFWorkbook(stream);
		Sheet sheet = book.getSheet("Datas");
		Row row = sheet.getRow(rownum);
		Cell cell = row.getCell(cellnum);
		int type = cell.getCellType();
		if (type == 1) {
			data = cell.getStringCellValue();
		} else if (type == 0) {
			if (DateUtil.isCellDateFormatted(cell)) {
				data = new SimpleDateFormat("dd-MMM-yy").format(cell.getDateCellValue());
			} else {
				data = String.valueOf((long) cell.getNumericCellValue());
			}
		}
		return data;
	}

	public void loadUrl(String url) {
		driver.get(url);
	}

	public String getAttribute(WebElement element, String data) {
		String attribute = element.getAttribute(data);
		return attribute;
	}

	public String getAttribute(WebElement element) {
		String attribute = element.getAttribute("Value");
		return attribute;
	}

	public void type(WebElement element, String data) {
		element.sendKeys(data);
	}

	public void click(WebElement element) {
		element.click();
	}

	public void clear(WebElement element) {
		element.clear();
	}

	public List<String> getAllOptions(WebElement element) {
		List<WebElement> options = new Select(element).getOptions();
		List<String> allText = new ArrayList<String>();
		for (WebElement eachelement : options) {
			allText.add(eachelement.getText());
		}
		return allText;
	}

	public void selectOption(WebElement element, String data, String text) {
		Select select = new Select(element);
		if (text.equalsIgnoreCase("text")) {
			select.selectByVisibleText(data);
		} else if (text.equalsIgnoreCase("value")) {
			select.selectByValue(data);
		} else if (text.equalsIgnoreCase("index")) {
			select.selectByIndex(Integer.parseInt(data));
		}
	}

	public void deselectOptionByValue(WebElement element, String data) {
		new Select(element).deselectByValue(data);
	}

	public void deselectOptionByIndex(WebElement element, int index) {
		new Select(element).deselectByIndex(index);
	}

	public void deselectOptionByText(WebElement element, String data) {
		new Select(element).deselectByVisibleText(data);
	}

	public void deselctAllOption(WebElement element) {
		new Select(element).deselectAll();
	}

	public String getCurrentUrl() {
		String url = driver.getCurrentUrl();
		return url;
	}

	public WebElement findElement(By path) {
		WebElement findElement = driver.findElement(path);
		return findElement;
	}

	public List<WebElement> findElements(By path) {
		List<WebElement> elements = driver.findElements(path);
		return elements;
	}

	public void navigateTo(String data) {
		driver.navigate().to(data);
	}

	public void navigateBack() {
		driver.navigate().back();
	}

	public void navigateForward() {
		driver.navigate().forward();
	}

	public void nacigateRefresh() {
		driver.navigate().refresh();
	}

	public String getTittle() {
		String title = driver.getTitle();
		return title;
	}

	public String getText(WebElement element) {
		String text = element.getText();
		return text;
	}

	public void alert() {
		driver.switchTo().alert();
	}

	public void alertAccept() {
		driver.switchTo().alert().accept();
	}

	public void alertDismiss() {
		driver.switchTo().alert().dismiss();
	}

	public void alertTextType(String data) {
		driver.switchTo().alert().sendKeys(data);
	}

	public List<String> getAllSelectedOptions(WebElement element) {
		List<WebElement> options = new Select(element).getAllSelectedOptions();
		List<String> allselectedtext = new ArrayList<String>();
		for (WebElement eachelement : options) {
			allselectedtext.add(eachelement.getText());
		}
		return allselectedtext;
	}

	public String firstSelectOption(WebElement element) {
		String text = new Select(element).getFirstSelectedOption().getText();
		return text;
	}

	public boolean isSelected(WebElement element) {
		boolean result = element.isSelected();
		return result;
	}

	public boolean isDisplayed(WebElement element) {
		boolean result = element.isDisplayed();
		return result;
	}

	public boolean isEnabled(WebElement element) {
		boolean result = element.isEnabled();
		return result;
	}

	public void moveToElement(WebElement target) {
		new Actions(driver).moveToElement(target).perform();
	}

	public void dragAndDrop(WebElement source, WebElement destination) {
		new Actions(driver).dragAndDrop(source, destination);
	}

	public void doubleClick() {
		new Actions(driver).doubleClick();
	}

	public void contextClick(WebElement element) {
		new Actions(driver).contextClick(element);
	}

	public void swtichToFrame(int id) {
		driver.switchTo().frame(id);
	}

	public void swtichToFrame(String name) {
		driver.switchTo().frame(name);
	}

	public void switchToFrame(WebElement element) {
		driver.switchTo().frame(element);
	}

	public void swtichToDefaultWindow() {
		driver.switchTo().defaultContent();
	}

	public void switchToParentFrame() {
		driver.switchTo().parentFrame();
	}

	public void switchToWindow(String data) {
		driver.switchTo().window(data);
	}

	public String parentWindowId() {
		String handle = driver.getWindowHandle();
		return handle;
	}

	public Set<String> allWindowIds() {
		Set<String> handles = driver.getWindowHandles();
		return handles;
	}

	public void closeAllwindow() {
		driver.quit();
	}

	public void closeWindow() {
		driver.close();
	}

	public File takeScreenShot() {
		TakesScreenshot screenshot = (TakesScreenshot) driver;
		File Source = screenshot.getScreenshotAs(OutputType.FILE);
		return Source;
	}

	public void takeScreenShotDestinationChange(String pathname) throws IOException {
		TakesScreenshot screenshot = (TakesScreenshot) driver;
		File Source = screenshot.getScreenshotAs(OutputType.FILE);
		File Destination = new File(pathname);
		FileUtils.copyFile(Source, Destination);
	}

	public void javaScriptSet(String data, WebElement element) {
		jk = (JavascriptExecutor) driver;
		jk.executeScript("arguments[0].setAttribute('value',data)", element);
	}

	public void javaScriptGet(String data, WebElement element) {
		jk = (JavascriptExecutor) driver;
		jk.executeScript("return arguments[0].getAttribute('value',data)", element);
	}

	public void javaScriptClick(String data, WebElement element) {
		jk = (JavascriptExecutor) driver;
		jk.executeScript("arguments[0].click()", element);
	}

	public void javaScriptScrollUp(WebElement element) {
		jk = (JavascriptExecutor) driver;
		jk.executeScript("arguments[0].scrollIntoView(true)", element);
	}

	public void javaScriptScrollDown(WebElement element) {
		jk = (JavascriptExecutor) driver;
		jk.executeScript("arguments[0].scrollIntoView(false)", element);
	}

}
