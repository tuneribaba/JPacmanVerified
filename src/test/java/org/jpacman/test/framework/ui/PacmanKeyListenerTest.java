package org.jpacman.test.framework.ui;

import static org.junit.Assert.*;

import java.awt.event.KeyEvent;
import java.lang.reflect.Constructor;

import org.junit.Before;
import org.junit.Test;
import org.jpacman.framework.ui.IPacmanInteraction;
import org.jpacman.framework.ui.MainUI;
import org.jpacman.framework.ui.PacmanInteraction;
import org.jpacman.framework.ui.PacmanKeyListener;

public class PacmanKeyListenerTest {
	
	private MainUI mainUI;
    private IPacmanInteraction interaction;
    private PacmanKeyListener keyListener;
    private KeyEvent e;

	
	@Before
	public void setUp() throws Exception {
		
		mainUI = new MainUI();
		mainUI.main();
		interaction = mainUI.eventHandler();
		
        final Constructor<?>[] constructors = PacmanKeyListener.class.getDeclaredConstructors();
        constructors[0].setAccessible(true);
        this.keyListener = (PacmanKeyListener) constructors[0].newInstance(interaction);
       
        this.e = new KeyEvent(this.mainUI, 0, 0, 0, 0);
	}
	
    @Test
    public void testKeyTyped() {
            this.keyListener.keyTyped(new KeyEvent(this.mainUI, 0, 0, 0, 0));
    }

	@Test
	public void testKeyPressedUp() {
        this.e.setKeyCode(KeyEvent.VK_UP);
        this.keyListener.keyPressed(this.e);
	}

	@Test
	public void testKeyPressedDown() {
	    this.e.setKeyCode(KeyEvent.VK_DOWN);
	    this.keyListener.keyPressed(this.e);
	}

	@Test
	public void testKeyPressedLeft() {
	    this.e.setKeyCode(KeyEvent.VK_LEFT);
	    this.keyListener.keyPressed(this.e);
	}

	@Test
	public void testKeyPressedRight() {
	    this.e.setKeyCode(KeyEvent.VK_RIGHT);
	    this.keyListener.keyPressed(this.e);
	}

	@Test
	public void testKeyPressedQ() {
	    this.e.setKeyCode(KeyEvent.VK_Q);
	    this.keyListener.keyPressed(this.e);
	}

	@Test
	public void testKeyPressedX() {
	    this.e.setKeyCode(KeyEvent.VK_X);
	    this.keyListener.keyPressed(this.e);
	}

	@Test
	public void testKeyPressedS() {
	    this.e.setKeyCode(KeyEvent.VK_S);
	    this.keyListener.keyPressed(this.e);
	}
	
    @Test
    public void testKeyReleased() {
            this.keyListener.keyReleased(new KeyEvent(this.mainUI, 0, 0, 0, 0));
    }

}
