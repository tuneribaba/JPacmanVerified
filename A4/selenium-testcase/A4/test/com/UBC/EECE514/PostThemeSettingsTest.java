/**
 * 
 */
package com.UBC.EECE514;

import org.junit.Assert;
import org.junit.Test;

import com.UBC.EECE514.model.PostsTheme;

/**
 * @author 2nday
 *
 */
public class PostThemeSettingsTest  extends BaseTest {

	/**
	 * 
	 */
	public PostThemeSettingsTest() {
		// TODO Auto-generated constructor stub
	}

	private PostsTheme theme;
	
	@Test
	public void testPostBodyTextColor() {
	    theme = new PostsTheme(driver);
	    theme.setPostBodyTextColor("teal");
	    Assert.assertEquals("rgba(0, 128, 128, 1)", theme.getPostBodyTextColor());		
    }
	
	@Test
	public void testDateFormatHijri() {
	    theme = new PostsTheme(driver);
	    theme.setDateFormat("DateFormatIsHijri");
	    Assert.assertFalse("should not contain slash based on format", theme.getDateFormat().contains("/"));		
	}
	
	@Test
	public void testDateFormatGreg() { 
	    theme = new PostsTheme(driver);
	    theme.setDateFormat("DateFormatIsGregorian");
	    Assert.assertTrue("should contain slash based on format", theme.getDateFormat().contains("/"));		
	}
	
	@Test
	public void testCommentsSize() {
		theme = new PostsTheme(driver);
		theme.setCommentsSize("14 pt");
	    Assert.assertEquals("18.48px", theme.getCommentsSize());
	}
	
	@Test
	public void testPermaLinkText() {
		theme = new PostsTheme(driver);
		theme.setPermaLinkText("PermaLink");
	    Assert.assertEquals("PermaLink", theme.getPermaLinkText());
	}

}
