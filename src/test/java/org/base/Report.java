package org.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;


public class Report {
	public static void jsonReport(String jsonfile) {

		File f = new File("C:\\Users\\USER\\Eclipse\\Cucumber\\src\\test\\resources\\Reports");
		Configuration configuration = new Configuration(f , "Adactin Hotel");
		configuration.addClassifications("Os", "Windows 8.1");
		configuration.addClassifications("Browser", "Chrome ");
		configuration.addClassifications("Version", "93");
		configuration.addClassifications("Sprint", "25");
		List<String> jsonFiles = new ArrayList<String>();
		jsonFiles.add(jsonfile);
		ReportBuilder builder = new ReportBuilder(jsonFiles, configuration);
		builder.generateReports();
		
	}
}
