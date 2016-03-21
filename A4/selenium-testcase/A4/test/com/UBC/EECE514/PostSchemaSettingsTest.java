/**
 * 
 */
package com.UBC.EECE514;

import org.junit.Assert;
import org.junit.Test;

import com.UBC.EECE514.model.PostSchema;

/**
 * @author 2nday
 *
 */
public class PostSchemaSettingsTest extends BaseTest {

	/**
	 * 
	 */
	public PostSchemaSettingsTest() {
		// TODO Auto-generated constructor stub
	}
	
	private PostSchema schema;

	@Test
	public void testPostTopBackgroundColor() {
		schema = new PostSchema(driver);
		schema.setPostTopBackgroundColor("deepskyblue");
	    Assert.assertEquals("rgba(0, 191, 255, 1)", schema.getPostTopBackgroundColor());
	}

	@Test
	public void testPostBodyBackgroundColor() {
		schema = new PostSchema(driver);
		schema.setPostBodyBackgroundColor("thistle");
	    Assert.assertEquals("rgba(216, 191, 216, 1)", schema.getPostBodyBackgroundColor());
	}

	@Test
	public void testPostBottomBackgroundColor() {
		schema = new PostSchema(driver);
		schema.setPostBottomBackgroundColor("ivory");
	    Assert.assertEquals("rgba(255, 255, 240, 1)", schema.getPostBottomBackgroundColor());
	}

	@Test
	public void testOnePostBorderColor() {
		schema = new PostSchema(driver);
		schema.setOnePostBorderColor("yellow");
	    Assert.assertEquals("rgba(255, 255, 0, 1)", schema.getOnePostBorderColor());
	}

	@Test
	public void testOnePostBorderSize() {
		schema = new PostSchema(driver);
		schema.setOnePostBorderSize("7 px");
	    Assert.assertEquals("7px", schema.getOnePostBorderSize());
	}

	@Test
	public void testVerticalBorderColor() {
		schema = new PostSchema(driver);
		schema.setVerticalBorderColor("black");
	    Assert.assertEquals("rgb(0, 0, 0)", schema.getVerticalBorderColor());
	}

	@Test
	public void testVerticalBorderSize() {
		schema = new PostSchema(driver);
		schema.setVerticalBorderSize("4 px");
	    Assert.assertEquals("4px", schema.getVerticalBorderSize());
	}

	@Test
	public void testHorizontalPadding() {
		schema = new PostSchema(driver);
		schema.setHorizontalPadding("50");
	    Assert.assertEquals("50px", schema.getHorizontalPaddingLeft());
	    Assert.assertEquals("50px", schema.getHorizontalPaddingRight());
	}

	
}
