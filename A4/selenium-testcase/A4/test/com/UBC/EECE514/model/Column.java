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
public class Column extends Blog {

	/**
	 * 
	 */
	public Column(WebDriver driver) {
		this.driver = driver;
		WebElement columnSettings = driver.findElement(By.id("SHColumnsSettings"));
		columnSettings.click();
	}
	
	public void setColumnStyle(String style) {
		
		super.selectCheckBox(style);
		
//        WebElement columnStyle = driver.findElement(By.id("ColsNumberIsOne"));
//        columnStyle.click();
        
//        WebElement mainColumn = driver.findElement(By.id("MainColumn"));
//        WebElement rColumn = driver.findElement(By.id("SideRColumn"));
//        WebElement lColumn = driver.findElement(By.id("SideLColumn"));
//
//        Assert.assertTrue("Should be selected", columnStyle.isSelected());
//        Assert.assertTrue("Should be visible", mainColumn.isDisplayed());
//        Assert.assertFalse("Should not be visible", rColumn.isDisplayed());
//        Assert.assertFalse("Should not be visible", lColumn.isDisplayed());
//
//        Assert.assertEquals("720px", mainColumn.getCssValue("width"));
//        Assert.assertEquals("Should not be visible", "none", rColumn.getCssValue("display"));
//        Assert.assertEquals("Should not be visible", "none", lColumn.getCssValue("display"));

    }
	
	public String getColumnWidth() {
		return super.getCSSProperty("MainColumn", "width");
	}
	
	public String getRColumnDisplay() {
		return super.getCSSProperty("SideRColumn", "display");
	}
	
	public String getLColumnDisplay() {
		return super.getCSSProperty("SideLColumn", "display");
	}
	
//	public void changeColumnStyleThreeColumn(WebDriver driver) {
//        WebElement columnStyle = driver.findElement(By.id("ColsNumberIsThree"));
//        columnStyle.click();
//        
//        WebElement mainColumn = driver.findElement(By.id("MainColumn"));
//        WebElement rColumn = driver.findElement(By.id("SideRColumn"));
//        WebElement lColumn = driver.findElement(By.id("SideLColumn"));
//        
//        Assert.assertTrue("Should be selected", columnStyle.isSelected());
//        Assert.assertTrue("Should be visible", mainColumn.isDisplayed());
//        Assert.assertTrue("Should be visible", rColumn.isDisplayed());
//        Assert.assertTrue("Should be visible", lColumn.isDisplayed());
//
//        Assert.assertEquals("Should not be vissible", "360px", mainColumn.getCssValue("width"));
//        Assert.assertEquals("Should be vissible", "block", rColumn.getCssValue("display"));
//        Assert.assertEquals("Should be vissible", "block", lColumn.getCssValue("display"));
  //  }
	
//	driver.manage().window().maximize();
//
//	private float getWidthInRelationToWindow(WebElement element) {
//	    return ((float)element.getSize().getWidth())/this.drivy.manage().window().getSize().getWidth();
//	}

}
