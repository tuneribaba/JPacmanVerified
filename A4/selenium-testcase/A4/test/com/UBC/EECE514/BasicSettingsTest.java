/**
 * 
 */
package com.UBC.EECE514;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.InvalidElementStateException;

import com.UBC.EECE514.model.Basic;

/**
 * @author 2nday
 *
 */
public class BasicSettingsTest  extends BaseTest {

	/**
	 * 
	 */
	public BasicSettingsTest() {
		// TODO Auto-generated constructor stub
	}

	private Basic basicSettings;
	
	@Test
	public void testBackgroundColor() {
		basicSettings = new Basic(driver);
		basicSettings.setBackgroundColor("azure");
	    Assert.assertEquals("rgba(240, 255, 255, 1)", basicSettings.getBackgroundColor());		
    }
	
	@Test
	public void testChangeTitle() {
		basicSettings = new Basic(driver);
		basicSettings.setTitle("Test");
	    Assert.assertEquals("[PsycHo] Test", basicSettings.getTitle());
	}

	@Test
    public void testEditImageUrlBlocked() throws Exception {
		basicSettings = new Basic(driver);
        try {
        	basicSettings.clearLink();
        	fail();
        } catch (InvalidElementStateException e) {
        	assertTrue(true);
        }
    }
	
	@Test
    public void testEditImageUrl() throws Exception {
		basicSettings = new Basic(driver);
		basicSettings.setImageURL("http://assets.brand.ubc.ca/signatures/2015/ubc_brand_assets_blue/4_logo/rgb/s4b282c2015.png");
		
		Assert.assertEquals("url(\"http://assets.brand.ubc.ca/signatures/2015/ubc_brand_assets_blue/4_logo/rgb/s4b282c2015.png\")", basicSettings.getImageURL());
    }
	
	@Test
    public void testEditBlogProvider() throws Exception {
		basicSettings = new Basic(driver);
		basicSettings.selectBlogProvider("PersianBlog");
        Assert.assertEquals("Archive", basicSettings.getBloggerText("R_LinkBody_0_2"));
	}
	
	
	

}
