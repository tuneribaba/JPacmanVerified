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
public class RSideTheme extends Blog {


	/**
	 * 
	 */
	
	public RSideTheme(WebDriver driver) {
		this.driver = driver;
		WebElement rTheme = driver.findElement(By.id("SHSideRTSettings"));
		rTheme.click();
	}
	
	public void setTitleFontColorByTextbox(String colorValue) { //#fff
		super.setText("_R_TitleColorEr", colorValue);
    }
	
	public String getTitle_1_FontColor() {
		return super.getCSSProperty("R_Title_1", "color");
	}
	
	public String getTitle_2_FontColor() {
		return super.getCSSProperty("R_Title_2", "color");
	}
	
	public String getTitle_3_FontColor() {
		return super.getCSSProperty("R_Title_3", "color");
	}

}
