function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Nice try 😏";
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

let firstNumber = "";
let operator = "";
let secondNumber = "";
let startNewNumber = false;

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    startNewNumber = false;
    display.textContent = "0";
});

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");

digits.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent === "0" || startNewNumber) {
            display.textContent = button.textContent;
            startNewNumber = false;
        } else {
            display.textContent += button.textContent;
        }
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (startNewNumber && operator !== "") {
            operator = button.textContent;
            return;
        }
        if (operator !== "") {
            const result = operate(operator, Number(firstNumber), Number(display.textContent));
            firstNumber = result;
        } else {
            firstNumber = display.textContent;
        }
        operator = button.textContent;
        display.textContent = firstNumber;
        startNewNumber = true;
    });
});

const equalsBtn = document.querySelector(".equals");

equalsBtn.addEventListener("click", () => {
    if (operator === "" || startNewNumber) return;
    secondNumber = display.textContent;
    let result = operate(operator, Number(firstNumber), Number(secondNumber));
    if (typeof result === "number") {
        result = Math.round(result * 1000) / 1000;
    }
    display.textContent = result;
    operator = "";
    startNewNumber = true;
});

const decimalBtn = document.querySelector(".decimal");

decimalBtn.addEventListener("click", () => {
    if (startNewNumber) {
        display.textContent = "0.";
        startNewNumber = false;
        return;
    }
    if (display.textContent.includes(".")) return;
    display.textContent += ".";
});