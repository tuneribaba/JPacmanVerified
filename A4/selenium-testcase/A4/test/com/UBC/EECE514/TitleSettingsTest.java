/**
 * 
 */
package com.UBC.EECE514;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

import com.UBC.EECE514.model.Title;

/**
 * @author 2nday
 *
 */
public class TitleSettingsTest extends BaseTest {
	private Title title;


//	/**
//	 * @throws java.lang.Exception
//	 */
//	@BeforeClass
//	public void setUpBeforeClass() throws Exception {
//		super.setUp();
//		title = new Title(driver);
//  
//	}
//
//	/**
//	 * @throws java.lang.Exception
//	 */
//	@AfterClass
//	public void tearDown() throws Exception {
//		super.tearDown();
//	}
	
	

	@Test
	public void testTitleText() {
		title = new Title(driver);
		title.setTitleText("Test");
	    Assert.assertEquals("Test", title.getTitleText());
	}
	
	@Test
	public void testDescriptionText() {
		title = new Title(driver);
	    title.setDescriptionText("TestDescr");
	    Assert.assertEquals("TestDescr", title.getDescriptionText());
	}
	
	/**
	 * 
	 */
	@Test
	public void testBackgroundColor() {  
		title = new Title(driver);
	    title.setBackgroundColor("teal");
	    Assert.assertEquals("rgba(0, 128, 128, 1)", title.getBackgroundColor());
	}
	
	/**
	 * 
	 */
	@Test
	public void testTitleFontColor() {  
		title = new Title(driver);
		title.setTitleFontColor("gray");
	    Assert.assertEquals("rgba(128, 128, 128, 1)", title.getTitleFontColor());
	}

	/**
	 * 
	 */
	@Test
	public void testDescriptionFontColor() {
		title = new Title(driver);
		title.setDescriptionFontColor("red");
	    Assert.assertEquals("rgba(255, 0, 0, 1)", title.getDescriptionFontColor());
	}
	
	/**
	 * 
	 */
	@Test
	public void testBorderColor() {
		title = new Title(driver);
		title.setBorderColor("green");
	    Assert.assertEquals("rgb(0, 128, 0)", title.getBorderColor());
	}
	
	/**
	 * 
	 */
	@Test
	public void testTitleFontSize() { 
		title = new Title(driver);
	    title.setTitleFontSize("36 pt");
	    Assert.assertEquals("47.52px", title.getTitleFontSize());
	}

	/**
	 * 
	 */
	@Test
	public void testDescriptionFontSize() {  
		title = new Title(driver);
	    title.setDescriptionFontSize("11 pt");
	    Assert.assertEquals("14.4672px", title.getDescriptionFontSize());
	}
	
	/**
	 * 
	 */
	@Test
	public void testBorderSize() {  
		title = new Title(driver);
	    title.setBorderSize("8 px");
	    Assert.assertEquals("8px", title.getBorderSize());
	}
	
	/**
	 * 
	 */
	@Test
	public void testVerticalPadding() {
		title = new Title(driver);
	    title.setSpacingVerticalPadding("25 px");
	    Assert.assertEquals("25px", title.getSpacingVerticalPaddingTop());
	    Assert.assertEquals("25px", title.getSpacingVerticalPaddingBottom());
	}
	
//	@Test
//	public void testGeneralTitleChangesInvalid() {
//		title = new Title(driver);
//		title.changeBackgroundColor(driver);
//		title.changeDescriptionFontSize(driver);
//		title.changeDescriptionFontColor(driver);
//		title.changeTitleFontSize(driver);
//		title.changeTitleFontColor(driver);
//		title.changeTitleText(driver);
//		title.changeDescriptionText(driver);
//		title.changeBorderSize(driver);
//		title.changeBorderColor(driver);
//		title.changeSpacingVerticalPadding(driver);
//	}

}
