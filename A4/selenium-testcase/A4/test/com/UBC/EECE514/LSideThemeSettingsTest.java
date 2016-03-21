/**
 * 
 */
package com.UBC.EECE514;

import org.junit.Assert;
import org.junit.Test;

import com.UBC.EECE514.model.Column;
import com.UBC.EECE514.model.LSideTheme;

/**
 * @author 2nday
 *
 */
public class LSideThemeSettingsTest  extends BaseTest {

	/**
	 * 
	 */
	public LSideThemeSettingsTest() {
		// TODO Auto-generated constructor stub
	}
	
	private LSideTheme theme;
	private Column column;

	public void changeUnderlineColor() {
		// make column visible that has left parts
		column = new Column(driver);
	    column.setColumnStyle("ColsNumberIsTwoR");
	    
	    theme = new LSideTheme(driver);
	    theme.setUnderlineColorByTextBox("#888");
	}
	
	@Test
	public void testPartsUnderlineColor_1() {
		changeUnderlineColor();
	    Assert.assertEquals("rgb(136, 136, 136)", theme.getUnderline_1_Color());	
    }
	
	@Test
	public void testPartsUnderlineColor_2() {
		changeUnderlineColor();
	    Assert.assertEquals("rgb(136, 136, 136)", theme.getUnderline_2_Color());		
    }
	
	@Test
	public void testPartsUnderlineColor_3() {	
		changeUnderlineColor();
	    Assert.assertEquals("rgb(136, 136, 136)", theme.getUnderline_3_Color());		
    }

}
