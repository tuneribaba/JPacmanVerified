package org.jpacman.test.framework.model;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;

import org.jpacman.framework.model.Board;
import org.jpacman.framework.model.Ghost;
import org.jpacman.framework.model.IBoardInspector.SpriteType;
import org.jpacman.framework.model.Sprite;
import org.jpacman.framework.model.Tile;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import static org.hamcrest.CoreMatchers.equalTo;

public class BoardTest {

	private static final int width = 10;
	private static final int height = 10;
	
	private Board board;

	@Before
	public void setUp() throws Exception {
		board = new Board(width, height);
		
	}

	@Test
	public void testBoardTooWide() {

		try {
			new Board(1, -1);
			fail();
		} catch (AssertionError e) {
			assertTrue(true);
		}
	}
	
	@Test
	public void testBoardTooTall() {

		try {
			new Board(-1, -1);
			fail();
		} catch (AssertionError e) {
			assertTrue(true);;
		}		
	}

	@Test
	public void testGetHeight() {
		assertEquals(height, board.getHeight());;
	}
	
	@Test
	public void testGetWidth() {
		assertEquals(width, board.getWidth());;
	}
	
	@Test
	public void testPut() {
		int x = 5;
		int y = 5;
		
		Ghost ghost = new Ghost();
		board.put(ghost, x, y);
		
		assertTrue(board.tileAt(x, y).containsSprite(ghost));

	}
	
	@Test
	public void testPutNull() {
		try {
			board.put(null, 0, 0);
			fail();
		} catch (AssertionError e) {
			assertTrue(true);
		}	
	}
	
	@Test
	public void testPutOutside() {
		Ghost ghost = new Ghost();

		try {
			board.put(ghost, -1, 0);
			fail();
		} catch (AssertionError e) {
			assertTrue(true);
		}	
	}

	@Test
	public void testWithinBorders() {

		assertTrue(board.withinBorders(5, 5));
		
		assertTrue(board.withinBorders(0, 0));
		assertTrue(board.withinBorders(0, 9));
		assertTrue(board.withinBorders(9, 0));
		assertTrue(board.withinBorders(9, 9));
		
		assertFalse(board.withinBorders(0, 10));
		assertFalse(board.withinBorders(-1, 0));
	
	}

	@Test
	public void testSpriteAt() {
		int x = 5;
		int y = 5;
		
		Ghost ghost = new Ghost();
		board.put(ghost, x, y);
		
		assertTrue(board.tileAt(x, y).containsSprite(ghost));
	}

	@Test
	public void testSpriteTypeAt() {
		int x = 5;
		int y = 5;
		
		Ghost ghost = new Ghost();
		board.put(ghost, x, y);
		
		assertEquals(SpriteType.GHOST, board.spriteTypeAt(x, y));
	}
	
	@Test
	public void testSpriteTypeAtOutside() {

		try {
			assertEquals(SpriteType.GHOST, board.spriteTypeAt(-1, 0));
			fail();
		} catch (AssertionError e) {
			assertTrue(true);
		}

	}

	@Test
	public void testPositiveTileAt() {
		int x = 5;
		int y = 5;
		
		Tile tile = board.tileAt(x, y);
		assertEquals(x, tile.getX());
		assertEquals(y, tile.getY());
	}
	
	@Test
	public void testTileAtOutside() {

		try {
			board.tileAt(0, -1);
			fail();
		} catch (AssertionError e) {
			assertTrue(true);
		}
	}

	@Test
	public void testOnBoardMessageFail() {

		int x = -1;
		int y = 5;
		
		Ghost ghost = new Ghost();
		try {
			board.put(ghost, x, y);
			fail();
		} catch (AssertionError e) {
			assertTrue(true);
		}
	}
	
	@Test
	public void testTileAtOffsetFail() {
		int x = 5;
		int y = 5;
		
		try {
			board.tileAtOffset(null, x, y);
			fail();
		} catch (AssertionError e) {
			assertTrue(true);
		}
	}
	
	@Test
	public void testTileAtOffsetOutside() {
		int x = 5;
		int y = 5;
		Tile tile = new Tile(11, 11);
		
		try {
			board.tileAtOffset(tile, x, y);
			fail();
		} catch (AssertionError e) {
			assertTrue(true);
		}
	}
	
	@RunWith(Parameterized.class)
	public static class WithinBordersTest {
		
		private final int x, y;
		private Board board;

		private static final int width = 10;
		private static final int height = 10;

		public WithinBordersTest(int x, int y) {
			this.x = x;
			this.y = y;

			board = new Board(width, height);
		}
		
		@Test
		public void testWithinBorder() {
			assertTrue(board.withinBorders(x, y));
		}
		
		@Parameters
		public static Collection<Object[]> values() {
			Object[][] values = new Object[][] {
					{0, 5},
					{-1, 5},
					{10, 5},
					{9, 5},
					{5, 0},
					{5, -1},
					{5, 10},
					{5, 9}
				};
			return Arrays.asList(values);
		}
		
	}
}
