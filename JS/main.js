
  
const buttons=document.querySelectorAll(".button");
const displayScreen=document.getElementById("value-display");

let currentOperand = "", previousOperand = "", result = 0;


function reAsign() {
    previousOperand = JSON.parse(String(result));
    currentOperand = "";
    result = 0;
}

function displayUpdate() {
    if (previousOperand !== "" && currentOperand.length === 0) {
        displayScreen.innerText = previousOperand;
    }
    else
        displayScreen.innerText = currentOperand;   
}

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

        // a function button was clicked
        else {
            switch (buttonValue) {
                case "-" : 
                // does "-" mean a negative sign ATM
                if (buttonValue === "-" && !currentOperand.includes("-") && currentOperand.length === 0) { ///<<< does not seem to need buttonValue
                    currentOperand += "-";
                    
                }
                else {
                   
                     // trasnfering value and reseting curentOperand
                    if (!previousOperand && (currentOperand.length >= 1 || !currentOperand.includes("-"))) {
                        previousOperand = JSON.parse(currentOperand);
                        currentOperand = "";
                    }
                    
                    // subtracting  values
                    else {
                        if (currentOperand &&  previousOperand) {
                            
                            result = ( (parseFloat(previousOperand) *1000) - (parseFloat(currentOperand) *1000) ) /1000;
                            reAsign();
                        }
                    }
                }
                break;

                case "+" :
                     // trasnfering value and reseting curentOperand
                    if (!previousOperand && currentOperand.length >= 1)  {
                        previousOperand = JSON.parse(currentOperand);
                        currentOperand = "";
                    }
                                                    
                    // subtracting  values
                    else {
                        if (currentOperand &&  previousOperand) {
                                                            
                        result = ( (parseFloat(previousOperand) *1000) + (parseFloat(currentOperand) *1000) ) /1000;
                        reAsign();
                        }
                    }
                break;
            }

        }

        displayUpdate();

    })
})
