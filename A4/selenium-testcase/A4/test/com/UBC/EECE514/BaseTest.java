/**
 * 
 */
package com.UBC.EECE514;

import java.util.concurrent.TimeUnit;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import junit.framework.TestCase;

/**
 * @author 2nday
 *
 */
public class BaseTest extends TestCase {

	public static WebDriver driver;

	/**
	 * 
	 */
	public BaseTest() {
		
	}
	
	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
        // launch Chrome and direct it to the Base URL
    	System.setProperty("webdriver.chrome.driver", "/Users/2nday/Downloads/chromedriver");
    	driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    	String baseUrl = "http://psyc.horm.org/";
        driver.get(baseUrl);
		        
	}

	/**
	 * @throws java.lang.Exception
	 */
	@After
	public void tearDown() throws Exception {
        //close browser
		driver.close();	
	}

}
