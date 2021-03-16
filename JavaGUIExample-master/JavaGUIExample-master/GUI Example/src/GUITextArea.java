import java.awt.BorderLayout;
import java.awt.GridLayout;

import javax.swing.BorderFactory;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;

public class GUITextArea {
	
	public GUITextArea() {
		JFrame frame = new JFrame();
		JPanel panel = new JPanel();
		JTextArea textarea = new JTextArea("MultiLine\nMultiLine\nMultiLine");
		
		panel.add(textarea);
		panel.setBorder(BorderFactory.createEmptyBorder(30,30,10,30));
		panel.setLayout(new GridLayout(0,1));
		
		frame.add(panel, BorderLayout.CENTER);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.pack();
		frame.setVisible(true);
	}

	public static void main(String[] args) {
		new GUITextArea();
	}

}
