/**
 * 
 */
package com.UBC.EECE514;

import static org.junit.Assert.*;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import junit.framework.TestCase;

/**
 * @author 2nday
 *
 */
public class TitleSettingsTest extends TestCase {
	
	public WebDriver driver;

	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
		
		System.setProperty("webdriver.chrome.driver", "/Users/2nday/Downloads/chromedriver");
        this.driver = new ChromeDriver();
		this.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

        String baseUrl = "http://psyc.horm.org/";
 
        // launch Chrome and direct it to the Base URL
        this.driver.get(baseUrl);

        // Make Title settings visible for editing
		WebElement titleSettings = this.driver.findElement(By.id("SHTitleSettings"));
		titleSettings.click();
		
		//assert that it is visible
        
	}

	/**
	 * @throws java.lang.Exception
	 */
	@After
	public void tearDown() throws Exception {
        //close browser
        this.driver.close();

        // exit the program explicitly
        //System.exit(0);	
	}

	@Test
	public void testBackgroundColor() {
        WebElement bgColorField = this.driver.findElement(By.id("HeaderBackColorEr"));
        bgColorField.click();
        bgColorField.clear();
        bgColorField.sendKeys("#FFF");
        
        WebElement header = this.driver.findElement(By.id("HeaderPart"));
        assertEquals("rgba(255, 255, 255, 1)", header.getCssValue("background-color"));
    }
	
	@Test
	public void testFontDescriptionSize() {
        WebElement descrSizeField = this.driver.findElement(By.id("SubTitleTextFontSizeEr"));

        descrSizeField.sendKeys("11 pt");
        
        WebElement description = this.driver.findElement(By.id("SubTitleText"));
        assertEquals("14.4672px", description.getCssValue("font-size")); //TODO: look at this closer later
    }
	
	@Test
	public void testFontDescriptionColor() {
        WebElement descrColorField = this.driver.findElement(By.id("SubTitleColorEr"));

        descrColorField.click();
        descrColorField.clear();
        descrColorField.sendKeys("#000");
        
        WebElement description = this.driver.findElement(By.id("SubTitleText"));
        assertEquals("rgba(0, 0, 0, 1)", description.getCssValue("color"));
    }
	
	@Test
	public void testFontTitleSize() {
        WebElement titleSizeField = this.driver.findElement(By.id("TitleTextFontSizeEr"));

        titleSizeField.sendKeys("11 pt");
        
        WebElement description = this.driver.findElement(By.id("SubTitleText"));
        assertEquals("18.48px", description.getCssValue("font-size")); //TODO: look at this closer later
    
	}
	
	@Test
	public void testFontTitleColor() {
        WebElement titleColorField = this.driver.findElement(By.id("TitleColorEr"));

        titleColorField.click();
        titleColorField.clear();
        titleColorField.sendKeys("#888");
        
        WebElement font = this.driver.findElement(By.id("TitleText"));
        assertEquals("rgb(136, 136, 136)", font.getCssValue("border-color"));	
    }
	
	@Test
	public void testTextTitle() {
        WebElement titleTextField = this.driver.findElement(By.id("TitleTextTextEr"));

        titleTextField.click();
        titleTextField.clear();
        titleTextField.sendKeys("Test");
        
        WebElement title = this.driver.findElement(By.id("TitleText"));
        assertEquals("Test", title.getText());	
    
	}
	
	//@Test
	public void testTextDescription() {
        WebElement descrTextField = this.driver.findElement(By.id("SubTitleTextTextEr"));

        descrTextField.click();
        descrTextField.clear();
        descrTextField.sendKeys("Test");
        
        WebElement description = this.driver.findElement(By.id("SubTitleText"));
        assertEquals("Test", description.getText());	
	}
	
	//@Test
	public void borderSize() {
		fail("Not yet implemented");
	}
	
	@Test
	public void testBorderColor() {
        WebElement borderColorField = this.driver.findElement(By.id("HeaderBorderColorEr"));

        borderColorField.click();
        borderColorField.clear();
        borderColorField.sendKeys("#888");
        
        WebElement header = this.driver.findElement(By.id("HeaderPart"));
        assertEquals("rgb(136, 136, 136)", header.getCssValue("border-color"));
	}
	
	@Test
	public void testSpacingVerticalPadding() {
        WebElement paddingField = this.driver.findElement(By.id("HeaderVerPaddingEr"));

        paddingField.sendKeys("25 pt");
        
        WebElement header = this.driver.findElement(By.id("HeaderPart"));
        assertEquals("25px", header.getCssValue("padding-top"));	
        assertEquals("25px", header.getCssValue("padding-bottom"));	
        
	}
	

}
