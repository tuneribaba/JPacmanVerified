package org.jpacman.test.framework.factory;

import static org.junit.Assert.*;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringReader;

import org.jpacman.framework.factory.FactoryException;
import org.jpacman.framework.factory.MapParser;
import org.junit.Test;

public class FactoryExceptionTest {

	@Test (expected = FactoryException.class)
	public void testFactoryExceptionString() throws FactoryException {
	
		String[] map = new String[0];
		MapParser mapParser = new MapParser(null);
		
		mapParser.parseMap(map);
	}

	@Test (expected = FactoryException.class)
	public void testFactoryExceptionStringThrown() throws FactoryException, IOException {

		MapParser mapParser = new MapParser(null);
		String string = "string";
		StringReader sr = new StringReader(string);
        BufferedReader br = new BufferedReader(sr);
        br.close();

		mapParser.getMap(br);
		
    }

}
