package org.jpacman.test.framework.model;

import org.junit.*;
import static org.junit.Assert.*;
import java.util.Arrays;
import java.util.Collection;
import org.jpacman.framework.model.Board;
import org.jpacman.framework.model.Ghost;
import org.jpacman.framework.model.IBoardInspector.SpriteType;
import org.jpacman.framework.model.Tile;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

public class BoardTest {

	private static final int width = 10;
	private static final int height = 10;
	private Board board;

	@Before
	public void setUpBoard() throws Exception {
		board = new Board(width, height);
	}

	@Test
	public void boardWidthNonPositive() {
		boolean passed = false;
		try {
			new Board(-1, 1);
			passed = true;
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) {
			assertFalse(passed);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
		}
	}
	
	@Test
	public void boardHeightNonPositive() {
		boolean passed = false;
		try {
			new Board(1, -1);
			passed = true;
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) {
			assertTrue(true);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
		}		
	}

	@Test
	public void getHeightValid() {
		assertEquals(height, board.getHeight());
	}
	
	@Test
	public void getWidthValid() {
		assertEquals(width, board.getWidth());
	}
	
	@Test
	public void putValid() {
		int x = 5;
		int y = 5;
		
		Ghost ghost = new Ghost();
		board.put(ghost, x, y);
		
		assertTrue(board.tileAt(x, y).containsSprite(ghost));
	}
	
	@Test
	public void putInvalidNull() {
		boolean passed = false;
		try {
			board.put(null, 0, 0);
			passed = true;
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) {
			assertFalse(passed);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
		}	
	}
	
	@Test
	public void putInvalidTileOutside() {
		Ghost ghost = new Ghost();
		boolean passed = false;
		
		try {
			board.put(ghost, 29, 20);
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) { 
			assertFalse(passed);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
		}		
	}
	
	@Test
	public void putInvalidTileNonPositive() {
		Ghost ghost = new Ghost();
		boolean passed = false;
		
		try {
			board.put(ghost, -1, 0);
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) {
			assertFalse(passed);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
		}		
	}

	@Test
	public void withinBordersBoundaries() {

		assertTrue(board.withinBorders(5, 5));
		assertTrue(board.withinBorders(0, 0));
		assertTrue(board.withinBorders(0, 9));
		assertTrue(board.withinBorders(9, 0));
		assertTrue(board.withinBorders(9, 9));		
		assertFalse(board.withinBorders(0, 10));
		assertFalse(board.withinBorders(-1, 0));
	
	}

	@Test
	public void spriteAtOnBoard() {
		int x = 5;
		int y = 5;
		
		Ghost ghost = new Ghost();
		board.put(ghost, x, y);
		
		assertTrue(board.tileAt(x, y).containsSprite(ghost));
	}

	@Test
	public void spriteTypeAtOnBoard() {
		int x = 5;
		int y = 5;
		
		Ghost ghost = new Ghost();
		board.put(ghost, x, y);
		
		assertEquals(SpriteType.GHOST, board.spriteTypeAt(x, y));
	}
	
	@Test
	public void spriteTypeAtOutsideBoard() {
		boolean passed = false;

		try {
			assertEquals(SpriteType.EMPTY, board.spriteTypeAt(-1, 0));
			passed = true;
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) {
			assertFalse(passed);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
		}

	}

	@Test
	public void tileAtValid() {
		int x = 5;
		int y = 5;
		
		Tile tile = board.tileAt(x, y);
		assertEquals(x, tile.getX());
		assertEquals(y, tile.getY());
	}
	
	@Test
	public void tileAtInvalidOutside() {
		boolean passed = false;

		try {
			board.tileAt(0, -1);
			passed = true;
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) {
			assertFalse(passed);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
		}
	}

	@Test
	public void onBoardMessageFail() {
		boolean passed = false;

		int x = -1;
		int y = 5;
		
		Ghost ghost = new Ghost();
		try {
			board.put(ghost, x, y);
			passed = true;
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) {
			assertFalse(passed);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
		}
	}
	
	@Test
	public void tileAtOffsetFail() {
		boolean passed = false;

		int x = 5;
		int y = 5;
		
		try {
			board.tileAtOffset(null, x, y);
			passed = true;
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) {
			assertFalse(passed);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
		}
	}
	
	@Test
	public void tileAtOffsetOutside() {
		int x = 5;
		int y = 5;
		Tile tile = new Tile(11, 11);
		boolean passed = false;
		
		try {
			board.tileAtOffset(tile, x, y);
			passed = true;
			//fail("Shouldn't get here");  - fail() throws AssertionError too just like the anticipated AssertionError from class
		} catch (AssertionError e) {
			assertFalse(passed);
		} finally {
			assertFalse("non-positive and exception not thrown", passed);
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
		public void withinBorderValidAndInvalid() {
			if (((x >= 0) && (x < 10)) && ((y >= 0) && (y < 10))) {
				//within boundary
				assertTrue(board.withinBorders(x, y));				
			} else {
				assertFalse(board.withinBorders(x, y));
			}
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
