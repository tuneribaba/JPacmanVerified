/**
 * 
 */
package com.UBC.EECE514;

import org.junit.Assert;
import org.junit.Test;

import com.UBC.EECE514.model.Column;

/**
 * @author 2nday
 *
 */
public class ColumnSettingsTest extends BaseTest {

//	/**
//	 * @throws Exception 
//	 * 
//	 */
//	public ColumnSettingsTest() throws Exception {
//		super.setUp();
//	}
	
	private Column column;

	@Test
	public void testOneColumn() {
		column = new Column(driver);
		column.setColumnStyle("ColsNumberIsOne");
	    Assert.assertEquals("720px", column.getColumnWidth());
	    Assert.assertEquals("none", column.getRColumnDisplay());
	    Assert.assertEquals("none", column.getLColumnDisplay());
	}
	
	@Test
	public void testThreeColumns() {
		column = new Column(driver);
	    column.setColumnStyle("ColsNumberIsThree");
	    Assert.assertEquals("360px", column.getColumnWidth());
	    Assert.assertEquals("block", column.getRColumnDisplay());
	    Assert.assertEquals("block", column.getLColumnDisplay());
	}
	
	@Test
	public void testTwoColumnsWithLeftBar() {
		column = new Column(driver);
		column.setColumnStyle("ColsNumberIsTwoR");
	    Assert.assertEquals("540px", column.getColumnWidth());
	    Assert.assertEquals("none", column.getRColumnDisplay());
	    Assert.assertEquals("block", column.getLColumnDisplay());
	}
	
	@Test
	public void testTwoColumnsWithRightBar() {
		column = new Column(driver);
	    column.setColumnStyle("ColsNumberIsTwoL");
	    Assert.assertEquals("540px", column.getColumnWidth());
	    Assert.assertEquals("block", column.getRColumnDisplay());
	    Assert.assertEquals("none", column.getLColumnDisplay());
	}	 
	
	@Test
	public void testMainColumnSpacingPixels() {

	}
	
	@Test
	public void testMainColumnSpacingPercen() {

	}
	    
		//column.changeColumnStyleThreeColumn(driver);
		//column.changeDescriptionFontColor(driver);
		//column.changeTitleFontSize(driver);
//		column.changeTitleFontColor(driver);
//		column.changeTitleText(driver);
//		column.changeDescriptionText(driver);
//		column.changeBorderSize(driver);
//		column.changeBorderColor(driver);
//		column.changeSpacingVerticalPadding(driver);

}
