/**
 * 
 */
package com.UBC.EECE514;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//import org.openga.selenium.RemoteWebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import junit.framework.TestCase;
import junit.framework.Assert.*;

//import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * @author 2nday
 *
 */
public class Main extends TestCase {
	 
	    public static void main(String[] args) {
	        // declaration and instantiation of objects/variables
	        WebDriver driver = new ChromeDriver();
	       // WebDriver driver = new RemoteWebDriver("http://localhost:9515", DesiredCapabilities.chrome());

	        String baseUrl = "http://psyc.horm.org/";
	        String expectedTitle = "[PsycHo] PsycHo: Free Template Generator";
	        String actualTitle = "";
	 
	        // launch Firefox and direct it to the Base URL
	        driver.get(baseUrl);
	 
	        // get the actual value of the title
	        actualTitle = driver.getTitle();
	        String tagName = driver.findElement(By.id("WholePageTitle")).getTagName();	
	        System.out.println(tagName);
	        
	        
	        WebElement wholePageTitle = driver.findElement(By.id("WholePageTitle"));

	        wholePageTitle.click();
	        wholePageTitle.clear();

	        wholePageTitle.sendKeys("test");

	        assertEquals("[PsycHo] test", driver.getTitle());
	        /*
	         * compare the actual title of the page with the expected one and print
	         * the result as "Passed" or "Failed"
	         */
	        if (actualTitle.contentEquals(expectedTitle)){
	            System.out.println("Test Passed!");
	        } else {
	            System.out.println("Test Failed");
	        }
	        
	        //close Firefox
	        driver.close();
	        
	        // exit the program explicitly
	        System.exit(0);
	    }

}
