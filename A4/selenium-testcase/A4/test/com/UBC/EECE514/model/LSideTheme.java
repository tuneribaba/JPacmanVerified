/**
 * 
 */
package com.UBC.EECE514.model;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * @author 2nday
 *
 */
public class LSideTheme extends Blog {


	/**
	 * 
	 */
	
	public LSideTheme(WebDriver driver) { 
		this.driver = driver;
		WebElement lTheme = driver.findElement(By.id("SHSideLTSettings"));
		lTheme.click();
	}
	
	public void setUnderlineColorByTextBox(String colorValue) {
		super.setText("_L_TitleUnderlineEr", colorValue);  

    }
	
	public String getUnderline_1_Color() {
		return super.getCSSProperty("L_Title_1", "border-color");
	}
	
	public String getUnderline_2_Color() {
		return super.getCSSProperty("L_Title_2", "border-color");
	}
	
	public String getUnderline_3_Color() {
		return super.getCSSProperty("L_Title_3", "border-color");
	}
	
}
