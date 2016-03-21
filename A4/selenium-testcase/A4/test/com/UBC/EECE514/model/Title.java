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
public class Title extends Blog {

	/**
	 * 
	 */
	
	public Title(WebDriver driver) {
		this.driver = driver;
		WebElement titleSettings = driver.findElement(By.id("SHTitleSettings"));
		titleSettings.click();
	}
	
	public void setBackgroundColor(String color) {
		super.setColor("HeaderBackColorErA", "selectorTxt_ColorPickerByNamEr", color); 

    }
	
	public String getBackgroundColor() {
		return super.getCSSProperty("HeaderPart", "background-color");
	}
	
	public void setDescriptionFontSize(String option) {
		super.selectDropDown("SubTitleTextFontSizeEr", option);
	}
	
	public String getDescriptionFontSize() {
		return super.getCSSProperty("SubTitleText", "font-size");
	}
	
	public void setTitleFontSize(String option) {
		
		super.selectDropDown("TitleTextFontSizeEr", option);

	}
	
	public String getTitleFontSize() {
		return super.getCSSProperty("TitleText", "font-size");
	}
	
	public void setTitleFontColor(String color) {
		
		super.setColor("TitleColorErA", "selectorTxt_ColorPickerByNamEr", color);
	}
	
	public String getTitleFontColor() {
		return super.getCSSProperty("TitleText", "color");
	}
	
	public void setDescriptionFontColor(String color) {
		
		super.setColor("SubTitleColorErA", "selectorTxt_ColorPickerByNamEr", color); 
	}
	
	public String getDescriptionFontColor() {
		return super.getCSSProperty("SubTitleText", "color");
	}
	
	public void setTitleText(String title) {		
		super.setText("TitleTextTextEr", title);
	    
	}
	
	public String getTitleText() {
		return getText("TitleText");  
	}
	
	public void setDescriptionText(String descr) {
		super.setText("SubTitleTextTextEr", descr);	   
	}
	
	public String getDescriptionText() {
		return getText("SubTitleText");
	}
	
	public void setBorderSize(String option) {
		
		super.selectDropDown("HeaderBorderWidthEr", option);   
	}
	
	public String getBorderSize() {
		return super.getCSSProperty("HeaderPart", "border-top-width");
	}
	
	public void setBorderColor(String color) {
		
		super.setColor("HeaderBorderColorErA", "selectorTxt_ColorPickerByNamEr", color);
	    
	}
	
	public String getBorderColor() {
		return super.getCSSProperty("HeaderPart", "border-color");
	}
	
	public void setSpacingVerticalPadding(String option) {
		
		super.selectDropDown("HeaderVerPaddingEr", option);	
	    
	}
	
	public String getSpacingVerticalPaddingTop() {
		return super.getCSSProperty("HeaderPart", "padding-top");
	}
	
	public String getSpacingVerticalPaddingBottom() {
		return super.getCSSProperty("HeaderPart", "padding-bottom");
	}


}
