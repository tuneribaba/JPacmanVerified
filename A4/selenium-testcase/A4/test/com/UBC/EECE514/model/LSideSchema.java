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
public class LSideSchema extends Blog {


	/**
	 * 
	 */
	
	public LSideSchema(WebDriver driver) {
		this.driver = driver;
		
		WebElement lSchema = driver.findElement(By.id("SHSideLSettings"));
		lSchema.click();
	}
	
	public void setPartSeparatorLineSize(String size) {
		super.selectDropDown("_L_SepBorderWidthEr", size);
	}
	
	public String getPartSeparatorLine_1_Size() {
		return super.getCSSProperty("L_PartSepSemiDiv_1", "border-bottom-width");
	}
	
	public String getPartSeparatorLine_2_Size() {
		return super.getCSSProperty("L_PartSepSemiDiv_2", "border-bottom-width");
	}
	
	public String getPartSeparatorLine_3_Size() {
		return super.getCSSProperty("L_PartSepSemiDiv_3", "border-bottom-width");
	}

}
