// SELECTORS
const displaySelector = document.querySelector("#display");

// use the buttons parent (the calculator div) to select the buttons using event delegation
const btnSelector = document.querySelector("#calculator");

// operation functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// variables
let initialNumber = "";
let operator = "";
let nextNumber = "";
let bank = [];
let lastBtnPressed = ""

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

const clearAll = () => {
    initialNumber = "";
    operator = "";
    nextNumber = "";
    bank.length === 0;
}

// event listener - listens on each button
btnSelector.addEventListener("click", (event) => {
    console.log(event.target);
    lastBtnPressed = event.target.id;
    console.log(`lastBtnPressed: ${lastBtnPressed}`);
    if (event.target.tagName === "BUTTON") {
        console.log("bank: ", bank);

        // clear all data in calc
        if (event.target.id === "clear") {
            clearAll();
            displaySelector.textContent = 0;
        }

        if (event.target.classList[1] === "number" && bank.length === 0) {
            // when a number is pressed it should be added to initialNumber and every number press after should also be added to initialNumber
            initialNumber += event.target.textContent;
            console.log(`initialNumber: ${initialNumber}`);
            displaySelector.textContent = initialNumber;
        }

        if (event.target.classList[1] === "operator") {
            // 1. push initialNumber string to the "bank"
            bank.push(initialNumber);
            console.log(`initialNumber: ${initialNumber}`);
            console.log(bank);
            // 2. set initialNumber to an empty string
            initialNumber = "";
            console.log(`initialNumber: ${initialNumber}`);
            // 3. set operator to the chosen sign
            operator += event.target.textContent;
            console.log(`operator: ${operator}`);
            displaySelector.textContent = operator;
            // 4. push operator to "bank"
            bank.push(operator);
            console.log(bank);
            operator = "";
        }

        if (event.target.classList[1] === "number" && bank.length > 0) {
            nextNumber += event.target.textContent;
            console.log(`nextNumber: ${nextNumber}`);
            displaySelector.textContent = nextNumber;
        }

        // check size of array and if indexes already exist
        // if array is equal to 3, fire operate function
        if (bank.length === 2 && event.target.textContent === "=") {
            // 1. push nextNumber string to the "bank"
            bank.push(nextNumber);
            console.log(`nextNumber: ${nextNumber}`);
            console.log(bank);
            // 2. set nextNumber to an empty string
            nextNumber = "";
            console.log(`nextNumber: ${nextNumber}`);
            // if bank[1] === "/" && bank[2] === "0", write an error message
            if (bank[1] === "/" && bank[2] === "0") {
                console.log("You shall not divide by zero!");
                displaySelector.textContent = "You shall not divide by zero!";
                bank.length = 0;
            } else {
                // 3. fire operator function to calculate. convert index 0 and index 2 from strings to numbers
                console.log('firing operate function');
                let answer = operate(Number(bank[0]), bank[1], Number(bank[2]));
                // 4. set display to answer
                displaySelector.textContent = +answer.toFixed(2);
                initialNumber = +answer.toFixed(2);
                console.log(`initialNumber: ${initialNumber}`);
                bank.length = 0;
                console.log(bank);
            }
        }
    }
});