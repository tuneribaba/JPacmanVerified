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
public class RSideSchema extends Blog {


	/**
	 * 
	 */
	
	public RSideSchema(WebDriver driver) {
		this.driver = driver;
		WebElement rSchema = driver.findElement(By.id("SHSideRSettings"));
		rSchema.click();
	}
	
	public void setBackgroundColor(String colorValue) {
		super.setText("_R_DefaultDivBackColorEr", colorValue); 
    }
	
//	public String getBackgroundColor_Div_1() {
//		return super.getCSSProperty("R_DefaultDiv_1", "background-color");
//	}
//	
//	public String getBackgroundColor_Div_2() {
//		return super.getCSSProperty("R_DefaultDiv_2", "background-color");
//	}
//	
//	public String getBackgroundColor_Div_3() {
//		return super.getCSSProperty("R_DefaultDiv_3", "background-color");
//	}
	
	public String getPartBackgroundColor(int section) {
		return super.getCSSProperty("R_DefaultDiv_"+section, "background-color");
	}
	
	public void addRightPartsSection() {
		super.clickLink("_R_AddOneBox_1");
	}
	
	public void removeRightPartsSection(int section) {
		// If part is visible remove it
		if (getRightPartsSection(section).contains("block"))
			super.clickLink("_R_RemoveThisBox_"+section);
	}
	
	public String getRightPartsSection(int section) {
		return super.getCSSProperty("R_PartDiv_"+section, "display");
	}
	
	
}
