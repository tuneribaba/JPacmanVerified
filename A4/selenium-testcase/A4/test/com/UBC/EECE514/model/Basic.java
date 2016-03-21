/**
 * 
 */
package com.UBC.EECE514.model;

import org.openqa.selenium.WebDriver;

/**
 * @author 2nday
 *
 */
public class Basic extends Blog {


	/**
	 * 
	 */
	
	public Basic (WebDriver driver) {
		this.driver = driver;
//		WebElement basicSettings = driver.findElement(By.id("SHBasicSettings"));
//		basicSettings.click();
	}
	
	public void setBackgroundColor(String color) { 
		super.setColor("WholeBackColorErA", "selectorTxt_ColorPickerByNamEr", color); 

    }
	
	public String getBackgroundColor() {
		return super.getCSSPropertyByTag("body", "background-color");
	}
	
	public void setTitle(String title) {
		super.setText("WholePageTitle", title);
	}
	
	public String getTitle() {
		return this.driver.getTitle();
	}
	
	public void clearLink() {
		super.clearLink("WholeBackTextureEr");
	}
	
	public void setImageURL(String link) {
		super.selectCheckBox("WholeBackHasImage");
		super.setText("WholeBackTextureEr", link);
	}
	
	public String getImageURL() {
		return super.getCSSPropertyByTag("Body", "background-image");
	}
	
	public void selectBlogProvider(String provider) {
		super.selectDropDown("WholeProvider", provider);
	}
	
	public String getBloggerText(String blogger) {
		return super.getText(blogger);
	}

}
