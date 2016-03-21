/**
 * 
 */
package com.UBC.EECE514;

import org.junit.Assert;
import org.junit.Test;

import com.UBC.EECE514.model.Column;
import com.UBC.EECE514.model.LSideSchema;

/**
 * @author 2nday
 *
 */
public class LSideSchemaSettingsTest  extends BaseTest {

	/**
	 * 
	 */
	public LSideSchemaSettingsTest() {
		// TODO Auto-generated constructor stub
	}

	private LSideSchema schema;
	private Column column;
	
	public void changeSeparatorLineSize() {
		// make column visible that has left parts
		column = new Column(driver);
	    column.setColumnStyle("ColsNumberIsThree");
	    
		schema = new LSideSchema(driver);
		schema.setPartSeparatorLineSize("6 px  ");
	}
	
	@Test
	public void testPartsSeparatorLineSize_1() {
		changeSeparatorLineSize(); 
	    Assert.assertEquals("6px", schema.getPartSeparatorLine_1_Size());	
    }
	
	@Test
	public void testPartsSeparatorLineSize_2() {
		changeSeparatorLineSize();
	    Assert.assertEquals("6px", schema.getPartSeparatorLine_2_Size());		
    }
	
	@Test
	public void testPartsSeparatorLineSize_3() {
		changeSeparatorLineSize();
	    Assert.assertEquals("6px", schema.getPartSeparatorLine_3_Size());		
    }

}
