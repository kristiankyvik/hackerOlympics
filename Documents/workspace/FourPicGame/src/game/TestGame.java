package game;

public class TestGame {
	public static void main(String[] args) {
		String[] pics = {"/Users/kristiankyvik/Documents/Paris/Paris4.jpg", "/Users/kristiankyvik/Documents/Paris/Paris4.jpg", "/Users/kristiankyvik/Documents/Paris/Paris4.jpg", "/Users/kristiankyvik/Documents/Paris/Paris4.jpg" };
		FourPictureGame game = new FourPictureGame("sdsdsdsds", pics, "paris");
		GameWIndow GUI = new GameWIndow(game);
	}
}
