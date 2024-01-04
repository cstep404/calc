// SELECTORS

// display
const displaySelector = document.querySelector("#display");

// use the buttons parent (the calculator div) to select the buttons using event delegation
const btnSelector = document.querySelector("#calculator")

// operation functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// variables
let initialNumber;
let operator;
let nextNumber;

// display
let display;

// operator function - takes an operator (+, -, *, /) and two numbers (a and b)
// a is set to initialNumber var
// b is set to nextNumber var
// operator is set to the operator var
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

// event listener - listens on each button
btnSelector.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.innerText);
        displaySelector.textContent = event.target.innerText;
    }
});

// solution var = stores final result of initialNumber, the operator, and next Number
// ex. initialNumber = 2
// operator = "+"
// nextNumber = "8"
// solution = 10

let solution = operate(initialNumber, operator, nextNumber);

// click a number and display should be updated to that number, then click an operator and display should be updated to the operator, finally click the last number and the display should update to that number while remembering the previous two operations
// ex. click "2", display should show "2". "2" then gets stored in the "bank". "+" is then clicked, so "+" should be displayed. "+" is then stored in the "bank" along with "2". lastly, "8" is clicked which should be shown in the display. then when the user clicks "=" it should fire the "add" function

// todo
// 1. *** when result is returned, initialNumber needs to be set to the new result ***
// 2. clear should remove all the data and set display to blank