// import here

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

const equalsButton = document.querySelector("#equals-button");

equalsButton.addEventListener("click", () => {
    const letters = /\p{L}/gu;

    if (letters.test(calculatorScreen.value)) {
        calculatorScreen.value = "Malformed expression.";
    }
    else {
        try {
            calculatorScreen.value = // math.js evaluate() here
        } catch (error) {
            calculatorScreen.value = "Error: " + error.message;
        };
    };
});