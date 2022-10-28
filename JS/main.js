





const buttons=document.querySelectorAll(".button");
const displayScreen=document.getElementById("value-display");

let screenResult = 0;
let currentOperand = "", previousOperand = "", result = "";
//booleans to control logic

let decimalPoint = false;
let minusSign = false;
// used only if after equals user enters number not function
const clearScreen = false;



buttons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {

        const buttonValue = currentButton.innerText;
        


        // a none function button has been clicked
        if (!currentButton.classList.contains("function")) {

            // it was the dot sign
            if (buttonValue === ".") {
                // it is allowed
                if (!currentOperand.includes(".")) { 

                // is addomg "zero" necessary
                    if ( (currentOperand.includes("-") && currentOperand.length === 1) || currentOperand.length === 0) {
                        currentOperand += 0;
                    }
                    currentOperand += ".";
                }


            }
            else {
                currentOperand += buttonValue;
            }


        }

        else {
            switch (buttonValue) {
                case "-" : 

                if (buttonValue === "-" && !minusSign) {

                    // check if at current state "-" mean minus or negative sign
                    if (currentOperand.length === 0) {
                        minusSign = true;
                        currentOperand += "-";
                    }
                }
                else {

                    if (!previousOperand) {
                        // trasnfering value and reseting curentOperand
                        previousOperand = JSON.parse(currentOperand);
                        currentOperand = "";
                        minusSign = false;
                    }


                }
                break;
            }

        }

        displayUpdate();

    })
})

function displayUpdate() {
    if (previousOperand && currentOperand.length === 0) {
        displayScreen.innerText = previousOperand;
    }
    else
        displayScreen.innerText = currentOperand;   
}