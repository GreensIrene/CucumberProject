package com.runner;

import org.base.Report;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = { "com.stepdefinition" }, dryRun = false, plugin = { "pretty",
		"json:src\\test\\resources\\Reports\\output.json" })
public class TestRunnerClass {

	@AfterClass
	public static void testReport() {
		Report.jsonReport("C:\\Users\\USER\\Eclipse\\Cucumber\\src\\test\\resources\\Reports\\output.json");
	}
}
