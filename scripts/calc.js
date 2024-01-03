// operation functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// operator function - takes an operator (+, -, *, /) and two numbers (a and b)
// a is set to initialNumber var
// b is set to nextNumber var
// operator is set to teh operator var
// an operation function is called depending on the value of the operator var
const operate = (a, operator, b) => {
    if (operator === "+") {
        let result = add(a, b);
        return result;
    }
    
    if (operator === "-") {
        let result = subtract(a, b);
        return result;
    }

    if (operator === "*") {
        let result = multiply(a, b);
        return result;
    }

    if (operator === "/") {
        let result = divide(a, b);
        return result;
    }
}

// variables
let initialNumber;
let operator = "";
let nextNumber;

// click a number and display should be updated to that number, then click an operator and display should be updated to the operator, finally click the last number and the display should update to that number while remembering the previous two operations
// ex. click "2", display should show "2". "2" then gets stored in the "bank". "+" is then clicked, so "+" should be displayed. "+" is then stored in the "bank" along with "2". lastly, "8" is clicked which should be shown in the display. then when the user clicks "=" it should fire the "add" function