# Simple Calculator

This is a simple calculator built with HTML, CSS, and vanilla JavaScript. The calculator supports basic arithmetic operations: addition, subtraction, multiplication, and division.

## Getting Started

### Prerequisites

To run this project, you only need a web browser.

### Installation

1. **Fork the Repository**
   - Click the "Fork" button at the top right of this repository page to create a copy of this repository in your GitHub account.

2. **Clone the Repository**
   - Clone the forked repository to your local machine:
     ```bash
     git clone https://github.com/YOUR-USERNAME/24w4-starter-calculator.git
     cd 24w4-starter-calculator
     ```

3. **Commit Regularly**
   - Make sure to commit your changes regularly:
     ```bash
     git add .
     git commit -m "Your descriptive commit message"
     git push origin main
     ```

4. **Open the Project**
   - Open `index.html` in your preferred web browser to see the calculator in action.

### File Structure

- `index.html` - The main HTML file that contains the structure of the calculator.
- `styles.css` - The CSS file that styles the calculator.
- `script.js` - The JavaScript file that contains the logic for the calculator.

## Usage

Open `index.html` in a web browser to use the calculator.

## Customization

You can customize the calculator to fit your needs. Here are some examples:

### Adding a Custom CSS Class

You can add a custom CSS class to style additional buttons or elements.

1. Add a custom button in the `index.html` file:
    ```html
    <button class="btn btn-custom" onclick="yourCustomFunction()">Custom</button>
    ```

2. Define the custom class in `styles.css`:
    ```css
    .btn-custom {
        background-color: #ff5722;
        color: #fff;
    }

    .btn-custom:hover {
        background-color: #e64a19;
    }
    ```

3. Add the custom function in `script.js`:
    ```javascript
    function yourCustomFunction() {
        // Your custom function logic
        alert('Custom button clicked!');
    }
    ```

### Ideas for Further Customization

#### Backgrounds

You can add background images or colors to the calculator.

1. Add a background color to the calculator in `styles.css`:
    ```css
    .calculator {
        background-color: #f9f9f9;
    }
    ```

2. Add a background image:
    ```css
    body {
        background-image: url('your-image.jpg');
        background-size: cover;
    }
    ```

#### Colors

Change the button colors to fit your theme.

1. Define custom colors for the buttons:
    ```css
    .btn {
        background-color: #007bff;
        color: #fff;
    }

    .btn:hover {
        background-color: #0056b3;
    }
    ```

#### Cool Functions

You can add more advanced functionality to the calculator.

1. Add a square root function:
    ```html
    <button class="btn" onclick="calculateSquareRoot()">√</button>
    ```

2. Add the function logic in `script.js`:
    ```javascript
    function calculateSquareRoot() {
        displayValue = Math.sqrt(parseFloat(displayValue)).toString();
        updateDisplay();
    }
    ```
# 24w4-starter-calculator
