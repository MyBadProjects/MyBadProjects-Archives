using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CalculatorCollection
{
    public partial class Form1 : Form
    {
        private bool decimalPlaced = false;
        private int calcPart = 1;
        private int method = 0;
        private string calc1 = string.Empty;
        private string calc2 = string.Empty;
        private double output;

        public Form1()
        {
            InitializeComponent();
        }

        private void addNumber(int amount)
        {
            if (calcPart == 1)
            {
                calc1 += Convert.ToString(amount);
                updateText(calc1);
            }
            else if (calcPart == 2)
            {
                calc2 += Convert.ToString(amount);
                updateText(calc2);
            }
        }

        private void addDecimal()
        {
            if (decimalPlaced == false)
            {
                if (calcPart == 1)
                {
                    calc1 += ".";
                    updateText(calc1);
                }
                else if (calcPart == 2)
                {
                    calc2 += ".";
                    updateText(calc2);
                }
            }
        }

        private void updateText(string changeTo)
        {
            richTextBox1.Text = changeTo;
        }

        private void calculate(int method)
        {
            void finish()
            {
                updateText(Convert.ToString(output));
                rollover();

                decimalPlaced = false;
                calcPart = 1;
                calc1 = string.Empty;
                calc2 = string.Empty;
                method = 0;
            }

            try
            {
                double calcD1 = Convert.ToDouble(calc1);
                double calcD2 = Convert.ToDouble(calc2);

                switch (method)
                {
                    case 1:
                        output = calcD1 + calcD2;
                        finish();
                        break;

                    case 2:
                        output = calcD1 - calcD2;
                        finish();
                        break;

                    case 3:
                        output = calcD1 * calcD2;
                        finish();
                        break;

                    case 4:
                        output = calcD1 / calcD2;
                        finish();
                        break;
                }
            }
            catch (Exception ex)
            {
                if (MessageBox.Show("The calculator encountered and error! Do you want to see the error message?", "Error", MessageBoxButtons.YesNo, MessageBoxIcon.Error) == DialogResult.Yes)
                {
                    MessageBox.Show(Convert.ToBase64String(Encoding.UTF8.GetBytes("Message: " + ex.Message)), Convert.ToBase64String(Encoding.UTF8.GetBytes(Convert.ToString(ex.GetType()))), MessageBoxButtons.OK, MessageBoxIcon.Error);
                    Environment.Exit(1);
                }
                else
                {
                    Environment.Exit(1);
                }
            }
        }

        private void rollover()
        {
            if (checkboxRollover.Checked)
            {
                calc1 = Convert.ToString(output);
                richTextBox1.Text = "";
                output = 0;
                richTextBox1.Text = calc1;
                calcPart = 1;
            }
            else
            {
                output = 0;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            addNumber(1);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            addNumber(2);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            addNumber(3);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            addNumber(4);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            addNumber(5);
        }

        private void button6_Click(object sender, EventArgs e)
        {
            addNumber(6);
        }

        private void button7_Click(object sender, EventArgs e)
        {
            addNumber(7);
        }

        private void button8_Click(object sender, EventArgs e)
        {
            addNumber(8);
        }

        private void button9_Click(object sender, EventArgs e)
        {
            addNumber(9);
        }

        private void button10_Click(object sender, EventArgs e)
        {
            addNumber(0);
        }

        private void buttonDecimal_Click(object sender, EventArgs e)
        {
            addDecimal();
        }

        private void buttonPlus_Click(object sender, EventArgs e)
        {
            method = 1;
            calcPart = 2;
            richTextBox1.Text = "";
        }

        private void buttonMinus_Click(object sender, EventArgs e)
        {
            method = 2;
            calcPart = 2;
            richTextBox1.Text = "";
        }

        private void buttonMultiply_Click(object sender, EventArgs e)
        {
            method = 3;
            calcPart = 2;
            richTextBox1.Text = "";
        }

        private void buttonDevide_Click(object sender, EventArgs e)
        {
            method = 4;
            calcPart = 2;
            richTextBox1.Text = "";
        }

        private void button11_Click(object sender, EventArgs e)
        {
            if (method != 0 && calcPart == 2)
            {
                calculate(method);
            }
        }
    }
}