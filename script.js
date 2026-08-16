const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let waitingForSecondNumber = false;


// NUMBER
function appendNumber(number) {

    if (display.value === "0" || waitingForSecondNumber) {
        display.value = number;
        waitingForSecondNumber = false;
    } else {
        display.value += number;
    }

}


// DECIMAL
function appendDecimal() {

    if (waitingForSecondNumber) {
        display.value = "0.";
        waitingForSecondNumber = false;
        return;
    }

    if (!display.value.includes(".")) {
        display.value += ".";
    }

}


// OPERATOR
function chooseOperator(selectedOperator) {

    firstNumber = parseFloat(display.value);

    operator = selectedOperator;

    waitingForSecondNumber = true;

}


// CALCULATE
function calculate() {

    if (operator === "" || waitingForSecondNumber) {
        return;
    }

    const secondNumber = parseFloat(display.value);

    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    }

    else if (operator === "-") {
        result = firstNumber - secondNumber;
    }

    else if (operator === "*") {
        result = firstNumber * secondNumber;
    }

    else if (operator === "/") {

        if (secondNumber === 0) {
            display.value = "Error";
            return;
        }

        result = firstNumber / secondNumber;
    }

    else if (operator === "%") {
        result = firstNumber % secondNumber;
    }

    display.value = result;

    firstNumber = result;

    operator = "";

    waitingForSecondNumber = true;

}


// CLEAR
function clearDisplay() {

    display.value = "0";

    firstNumber = "";

    operator = "";

    waitingForSecondNumber = false;

}


// DELETE
function deleteLast() {

    if (display.value === "Error" || display.value.length <= 1) {

        display.value = "0";

    } else {

        display.value = display.value.slice(0, -1);

    }

}


// KEYBOARD SUPPORT
document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (key >= "0" && key <= "9") {

        appendNumber(key);

    }

    else if (key === ".") {

        appendDecimal();

    }

    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
    ) {

        chooseOperator(key);

    }

    else if (key === "Enter" || key === "=") {

        calculate();

    }

    else if (key === "Escape") {

        clearDisplay();

    }

    else if (key === "Backspace") {

        deleteLast();

    }

});
