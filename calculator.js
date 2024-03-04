function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function operate(x, operator, y) {
    switch (operator) {
        case "+":
            add(x, y);
            break;
        case "-":
            subtract(x, y);
            break;
        case "*":
            multiply(x, y);
            break;
        case "/":
            divide(x, y);
            break;
        default:
            console.log("Invalid operator.");
            break;
    };
};

const calculatorScreen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculatorScreen.textContent += button.textContent;
    });
});

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", () => {
    calculatorScreen.textContent = "";
});