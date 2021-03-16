using System;
using System.IO;
using System.Text;
using System.Windows.Forms;

namespace Vertically_Opposite_Calculator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private int Topmost = 1;

        private void button1_Click(object sender, EventArgs e)
        {
            Calculate();
        }

        private void Calculate()
        {
            textBox3.Text = textBox1.Text;

            string FinalText = "";

            foreach (char Num in textBox1.Text)
            {
                string CharString = Convert.ToString(Num);

                if (CharString == "1" || CharString == "2" || CharString == "3" || CharString == "4" || CharString == "5" || CharString == "6" || CharString == "7" || CharString == "8" || CharString == "9" || CharString == "0")
                {
                    FinalText += Convert.ToString(CharString);
                }
            }

            double Final = 0;

            if (Convert.ToDouble(FinalText) > 360)
            {
                textBox1.Text = "";
                textBox3.Text = "";
                MessageBox.Show("The maximum number is 360!", "Overload", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            else if (Convert.ToDouble(FinalText) < 4)
            {
                MessageBox.Show("The minimum number is 4");
            }
            else
            {
                Final = (360 - (Convert.ToDouble(FinalText) * 2)) / 2;

                textBox2.Text = Convert.ToString(Final);
                textBox4.Text = Convert.ToString(Final);
            }
        }

        // FORM MOVEMENT

        private int Triggered = 0;
        private int X = 0;
        private int Y = 0;

        private void panel1_MouseDown(object sender, MouseEventArgs e)
        {
            Triggered = 1;
            X = e.X;
            Y = e.Y;
        }

        private void panel1_MouseMove(object sender, MouseEventArgs e)
        {
            if (Triggered == 1)
            {
                this.SetDesktopLocation(MousePosition.X - X, MousePosition.Y - Y);
            }
        }

        private void panel1_MouseUp(object sender, MouseEventArgs e)
        {
            Triggered = 0;
        }

        private void close_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            ApplySettings();
        }

        private void ApplySettings()
        {
            if (Topmost == 0)
            {
                this.TopMost = false;
            }
            else
            {
                this.TopMost = true;
            }
        }
    }
}