package com.runner;

import org.adactin.Base;
import org.base.Report;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = { "com.stepdefinition" }, dryRun = false, plugin = { "pretty",
		"json:src\\test\\resources\\Reports\\output.json" }, tags="@ResAp"
)
public class TestRunnerClass extends Base{
	
	@BeforeClass
	public static void browserLaunch() {
		getDriver();
	}
	
	@AfterClass
	public static void quit() {
		driver.quit();
	}

}
