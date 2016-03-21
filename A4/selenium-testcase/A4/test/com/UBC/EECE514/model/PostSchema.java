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
public class PostSchema extends Blog {

	/**
	 * 
	 */
	public PostSchema(WebDriver driver) {
		this.driver = driver;
		WebElement postSchema = driver.findElement(By.id("SHPostsSettings"));
		postSchema.click();
	}
	
	public void setPostTopBackgroundColor(String color) {
		super.setColor("OnePostTopBackColorErA", "selectorTxt_ColorPickerByNamEr", color); 

    }
	
	public String getPostTopBackgroundColor() {
		return super.getCSSProperty("OnePostTopPart", "background-color");
	}
	
	public void setPostBodyBackgroundColor(String color) {
		super.setColor("PostBodyBackColorErA", "selectorTxt_ColorPickerByNamEr", color); 

    }
	
	public String getPostBodyBackgroundColor() {
		return super.getCSSProperty("OnePostMainDiv", "background-color");
	}
	
	public void setPostBottomBackgroundColor(String color) {
		super.setColor("OnePostBotBackColorErA", "selectorTxt_ColorPickerByNamEr", color); 

    }
	
	public String getPostBottomBackgroundColor() {
		return super.getCSSProperty("OnePostBotPart", "background-color");
	}
	
	public void setOnePostBorderColor(String color) {
		
		super.setColor("OnePostBorderColorErA", "selectorTxt_ColorPickerByNamEr", color);
	}
	
	public String getOnePostBorderColor() {
		return super.getCSSProperty("OnePostMainDiv", "border-top-color");
	}
	
	public void setOnePostBorderSize(String option) {
		super.selectDropDown("OnePostBorderWidthEr", option);
	}
	
	public String getOnePostBorderSize() {
		return super.getCSSProperty("OnePostMainDiv", "border-top-width");
	}
	
	public void setVerticalBorderColor(String color) {
		
		super.setColor("VerPostBorderColorErA", "selectorTxt_ColorPickerByNamEr", color);
	}
	
	public String getVerticalBorderColor() {
		return super.getCSSProperty("OnePostTopPart", "border-color");
	}
	
	public void setVerticalBorderSize(String option) {
		super.selectDropDown("VerPostBorderWidthEr", option);
	}
	
	public String getVerticalBorderSize() {
		return super.getCSSProperty("OnePostTopPart", "border-bottom-width");
	}
	
	public void setHorizontalPadding(String padding) {
		
		super.setText("PostBodyHP", padding);	   
	    
	}
	
	public String getHorizontalPaddingLeft() {
		return super.getCSSProperty("OnePostMidPart", "padding-left");
	}
	
	public String getHorizontalPaddingRight() {
		return super.getCSSProperty("OnePostMidPart", "padding-right");
	}

}
