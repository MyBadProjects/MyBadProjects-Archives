import java.awt.BorderLayout;
import java.awt.GridLayout;

import javax.swing.BorderFactory;
import javax.swing.JLabel;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class GUILabel {
	
	public GUILabel() {
		JLabel label = new JLabel("Label Text");
		JFrame frame = new JFrame();
		JPanel panel = new JPanel();
		
		panel.add(label);
		panel.setBorder(BorderFactory.createEmptyBorder(30,30,10,30));
		panel.setLayout(new GridLayout(0,1));
		
		frame.add(panel, BorderLayout.CENTER);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.pack();
		frame.setVisible(true);
	}
	
	public static void main(String[] Args) {
		new GUILabel();
	}
}
