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
public class PostsTheme extends Blog {

	/**
	 * 
	 */
	public PostsTheme(WebDriver driver) {
		this.driver = driver;
		WebElement postTheme = driver.findElement(By.id("SHPostsTSettings"));
		postTheme.click();
	}
	
	public void setPostBodyTextColor(String color) {
		super.setColor("PostBodyColorErA", "selectorTxt_ColorPickerByNamEr", color); 

    }
	
	public String getPostBodyTextColor() {
		return super.getCSSProperty("OnePostMidPart", "color");
	}
	
	public void setDateFormat(String format) { //DateFormatIsGregorian,DateFormatIsHijri
		super.selectCheckBox(format);
	}
	
	public String getDateFormat() {
		return super.getText("OnePostDateTop"); // assert if contains "/"
	}
	
	public void setCommentsSize(String size) {
		super.selectDropDown("OnePostCommentsFontSizeEr", size);
	}
	
	public String getCommentsSize() {
		return super.getCSSProperty("OnePostComments", "font-size"); //1.75em = 14pt
	}
	
	public void setPermaLinkText(String text) {
		super.setText("PermLinkExp", text);
	}
	
	public String getPermaLinkText() {
		return super.getText("OnePostPermLink");
	}
	
	
}
