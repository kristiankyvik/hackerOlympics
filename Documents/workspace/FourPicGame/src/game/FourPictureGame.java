package game;

import java.lang.reflect.Array;

public class FourPictureGame {
	private String charSelection;
	private String[] filenames;
	private String answer;
	private String revealedAnswer = "";
	public FourPictureGame(String charSelection, String[] filenames, String answer){
		this.charSelection = charSelection;
		this.filenames = filenames;
		this.answer = answer;
		for (int i = 0; i<answer.length(); i++){
			revealedAnswer += "_";
		}
	}
	public String getCharSelection() {
		return charSelection;
	}

	public void setCharSelection(String charSelection) {
		this.charSelection = charSelection;
	}

	public String[] getFilenames() {
		return filenames;
	}

	public void setFilenames(String[] filenames) {
		this.filenames = filenames;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getRevealedAnswer() {
		return revealedAnswer;
	}

	public void setRevealedAnswer(String revealedAnswer) {
		this.revealedAnswer = revealedAnswer;
	}
	

}
