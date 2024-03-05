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

const numberButtons = document.querySelectorAll(".number, .operator, .symbol");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculatorScreen.value += button.textContent;
    });
});

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", () => {
    calculatorScreen.value = "";
});

const undoButton = document.querySelector("#undo-button");

undoButton.addEventListener("click", () => {
    let screenValue = calculatorScreen.value;
    calculatorScreen.value = screenValue.replace(screenValue.charAt(screenValue.length - 1), ""); // delete last character
});

// const re = /([+\-*\/])/; to capture every operator symbol