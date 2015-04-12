package game;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import javax.lang.model.element.VariableElement;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JPanel;


public class GameWIndow extends JFrame{
	private JLabel revealedAnswer = new JLabel();
	private JPanel picturePanel = new JPanel();;
	private JPanel lettersPanel = new JPanel();
	private FourPictureGame game;
	
	public GameWIndow(FourPictureGame game){
		super("four Pictures, One ewewewew");
		this.game = game;
		this.setLayout(new BorderLayout());
		this.setSize(800, 600);
		this.setVisible(true);
//		this.setResizable(false);
		System.out.println("Guessed: "+ game.getRevealedAnswer());
		
		revealedAnswer.setText("Guessasasasasased: " + game.getRevealedAnswer());
		String[] pictures = game.getFilenames();
		ImageIcon icon1 = new ImageIcon(pictures[0]);
		JLabel img1 = new JLabel(icon1);
		JLabel testLabel = new JLabel("hello");
		lettersPanel.add(testLabel);
		ImageIcon icon2 = new ImageIcon(pictures[1]);
		JLabel img2 = new JLabel(icon2);
		ImageIcon icon3 = new ImageIcon(pictures[2]);
		JLabel img3 = new JLabel(icon3);
		ImageIcon icon4 = new ImageIcon(pictures[3]);
		JLabel img4 = new JLabel(icon4);
		picturePanel.add(img1);
		picturePanel.add(img2);
		picturePanel.add(img3);
		picturePanel.add(img4);
	
		this.add(revealedAnswer, BorderLayout.NORTH);
		this.add(picturePanel, BorderLayout.CENTER);
		this.add(lettersPanel,BorderLayout.SOUTH);
		
	}
	
}
