const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let waitingForSecondNumber = false;


// ================================
// NUMBER INPUT
// ================================

function appendNumber(number) {

    if (display.value === "0" || waitingForSecondNumber) {

        display.value = number;

        waitingForSecondNumber = false;

    } else {

        display.value += number;

    }
}


// ================================
// DECIMAL
// ================================

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


// ================================
// OPERATOR
// ================================

function chooseOperator(selectedOperator) {

    if (operator && waitingForSecondNumber) {

        operator = selectedOperator;
        return;

    }

    firstNumber = parseFloat(display.value);

    operator = selectedOperator;

    waitingForSecondNumber = true;

}


// ================================
// CALCULATE
// ================================

function calculate() {

    if (!operator || waitingForSecondNumber) {
        return;
    }

    const secondNumber = parseFloat(display.value);

    let result;

    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {

                display.value = "Error";

                firstNumber = "";
                operator = "";
                waitingForSecondNumber = true;

                return;
            }

            result = firstNumber / secondNumber;
            break;

        case "%":
            result = firstNumber % secondNumber;
            break;

    }

    display.value = result;

    firstNumber = result;

    operator = "";

    waitingForSecondNumber = true;

}


// ================================
// CLEAR
// ================================

function clearDisplay() {

    display.value = "0";

    firstNumber = "";

    operator = "";

    waitingForSecondNumber = false;

}


// ================================
// DELETE
// ================================

function deleteLast() {

    if (
        display.value === "Error" ||
        display.value.length <= 1
    ) {

        display.value = "0";

    } else {

        display.value = display.value.slice(0, -1);

    }

}


// ================================
// KEYBOARD SUPPORT
// ================================

document.addEventListener("keydown", function(event) {

    const key = event.key;


    // Numbers

    if (key >= "0" && key <= "9") {

        appendNumber(key);

    }


    // Decimal

    else if (key === ".") {

        appendDecimal();

    }


    // Operators

    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
    ) {

        chooseOperator(key);

    }


    // Enter = Calculate

    else if (key === "Enter" || key === "=") {

        calculate();

    }


    // Escape = Clear

    else if (key === "Escape") {

        clearDisplay();

    }


    // Backspace = Delete

    else if (key === "Backspace") {

        deleteLast();

    }

});
