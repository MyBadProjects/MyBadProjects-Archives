import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class GUIExample implements ActionListener{
	
	private int buttoncount = 0;
	
	private JButton button;
	private JCheckBox checkbox;
	private JFrame frame;
	private JLabel label;
	private JLabel labelcounter;
	private JPanel panel;
	
	public GUIExample() {
		button = new JButton("Count");
		checkbox = new JCheckBox("Toggle Counter");
		frame = new JFrame();
		label = new JLabel("Counter");
		labelcounter = new JLabel("Amount of clickes: ");
		panel = new JPanel();
		
		button.addActionListener(this);
		
		panel.add(button);
		panel.add(checkbox);
		panel.add(label);
		panel.add(labelcounter);
		panel.setBorder(BorderFactory.createEmptyBorder(30,30,10,30));
		panel.setLayout(new GridLayout(0,1));
		
		frame.add(panel, BorderLayout.CENTER);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.pack();
		frame.setVisible(true);
	}
	
	public static void main(String[] Args) {
		new GUIExample();
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		if (checkbox.isSelected()) {
			buttoncount++;
			labelcounter.setText("Amount of clickes: " + buttoncount);
		}
	}
}
