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

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    display.textContent = "0";
});

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");

digits.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumber = display.textContent;
        operator = button.textContent;
        display.textContent = "0";
    });
});

const equalsBtn = document.querySelector(".equals");

equalsBtn.addEventListener("click", () => {
    secondNumber = display.textContent;
    const result = operate(operator, Number(firstNumber), Number(secondNumber));
    display.textContent = result;
});