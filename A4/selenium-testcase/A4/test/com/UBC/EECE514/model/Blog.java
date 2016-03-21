/**
 * 
 */
package com.UBC.EECE514.model;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

/**
 * @author 2nday
 *
 */
public class Blog {

	/**
	 * 
	 */
	public Blog() {
		// TODO Auto-generated constructor stub
	}
	
	public WebDriver driver;
	
	public String standardColorNamePrefix = "AColor_N_";
	
	public void setColor(String elementID, String subElementID, String color) {
		WebElement colorField = driver.findElement(By.id(elementID));
		colorField.click();

		WebElement colorStandardNames = driver.findElement(By.id(subElementID));
		colorStandardNames.click();

		WebElement colorButton = driver.findElement(By.id(standardColorNamePrefix+color));
		colorButton.click();

		//Dismiss the color picker
		WebElement dismiss = driver.findElement(By.linkText("[Dismiss]"));
		dismiss.click();
		
	}
	
	public void setText(String elementID, String text) {		
	    WebElement textField = driver.findElement(By.id(elementID));
	    textField.click();
	    textField.clear();
	    textField.sendKeys(text);
	}
	
	public void selectDropDown(String elementID, String optionID) {
		
	    WebElement selectField = driver.findElement(By.id(elementID));
	    new Select(selectField).selectByVisibleText(optionID);

	}
	
	public void selectCheckBox(String elementID) {	
	    WebElement checkBoxField = driver.findElement(By.id(elementID));
	    checkBoxField.click();
	
	}

	public void clickLink(String elementID) {
		WebElement link = driver.findElement(By.id(elementID));
		link.click();
	}
	
	public void clearLink(String elementID) {
		WebElement link = driver.findElement(By.id(elementID));
		link.click();
		link.clear();
	}
	
	public String getCSSProperty(String elementID, String cssProperty) {
		return driver.findElement(By.id(elementID)).getCssValue(cssProperty);
	}
	
	public String getCSSPropertyByTag(String elementID, String cssProperty) {
		return driver.findElement(By.tagName(elementID)).getCssValue(cssProperty);
	}

	public String getText(String elementID) {
		return driver.findElement(By.id(elementID)).getText();
	}
	
}
