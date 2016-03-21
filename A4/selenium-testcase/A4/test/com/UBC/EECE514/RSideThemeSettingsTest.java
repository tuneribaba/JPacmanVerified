/**
 * 
 */
package com.UBC.EECE514;

import org.junit.Assert;
import org.junit.Test;

import com.UBC.EECE514.model.Column;
import com.UBC.EECE514.model.RSideTheme;


/**
 * @author 2nday
 *
 */
public class RSideThemeSettingsTest  extends BaseTest {

	/**
	 * 
	 */
	public RSideThemeSettingsTest() {
		// TODO Auto-generated constructor stub
	}

	private RSideTheme theme;
	private Column column;
	
	public void changeTitleFontColor() {	    
		// make column visible that has left parts
		column = new Column(driver);
	    column.setColumnStyle("ColsNumberIsTwoL");
	    
	    theme = new RSideTheme(driver);
	    theme.setTitleFontColorByTextbox("#CCC");
    }
	
	
	@Test
	public void testPartsTitleColor_1() {
		changeTitleFontColor();
	    Assert.assertEquals("rgba(204, 204, 204, 1)", theme.getTitle_1_FontColor());	
    }
	
	@Test
	public void testPartsTitleColor_2() {
		changeTitleFontColor();
	    Assert.assertEquals("rgba(204, 204, 204, 1)", theme.getTitle_2_FontColor());		
    }
	
	@Test
	public void testPartsTitleColor_3() {	
		changeTitleFontColor();
	    Assert.assertEquals("rgba(204, 204, 204, 1)", theme.getTitle_3_FontColor());		
    }
}
