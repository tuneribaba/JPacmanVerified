/**
 * 
 */
package com.UBC.EECE514;

import org.junit.Assert;
import org.junit.Test;

import com.UBC.EECE514.model.Column;
import com.UBC.EECE514.model.RSideSchema;

/**
 * @author 2nday
 *
 */
public class RSideSchemaSettingsTest  extends BaseTest {

	/**
	 * 
	 */
	public RSideSchemaSettingsTest() {
		// TODO Auto-generated constructor stub
	}

	private RSideSchema schema;
	private Column column;
	
	public void setUp() throws Exception {
		super.setUp();
		// make column visible that has left parts
		column = new Column(driver);
	    column.setColumnStyle("ColsNumberIsThree");
		//removeMultipleParts(5);
	}
	
	public void createMultipleParts(int amount) {
	    schema = new RSideSchema(driver);
	  
	    for (int i=0; i < amount; i++) {
		    schema.addRightPartsSection();
	    }
	}
	
	public void removeMultipleParts(int amount) {
	    schema = new RSideSchema(driver);
	  
	    for (int i=0; i < amount; i++) {
		    schema.removeRightPartsSection(i);
	    }
	}
	
	public void createSinglePart() {
	    schema = new RSideSchema(driver);
		schema.addRightPartsSection();
	}
	
	public void removeSinglePart(int part) {
	    schema = new RSideSchema(driver);
		schema.removeRightPartsSection(part);
	}
	
	public void changeBackgroundColor() {
	    schema = new RSideSchema(driver);
	    schema.setBackgroundColor("#234");
	}
	
	@Test
	public void testBackgroundColorParts() {
		//createMultipleParts(6);
		changeBackgroundColor();
		
		// Assert bgColor for all parts
	    for (int i=0; i < 6; i++) {
		    Assert.assertEquals("rgba(34, 51, 68, 1)", schema.getPartBackgroundColor(i));		
	    }
    }

	@Test
	public void testPartCreated() {
		createSinglePart();
		Assert.assertEquals("Part "+4 +": Should be visible", "block", schema.getRightPartsSection(4));		

    }
	
	// at least one box has to be present on the right side
	// the maximum number of boxes is 6.


}
