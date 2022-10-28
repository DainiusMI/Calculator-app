
  
const buttons=document.querySelectorAll(".button");
const displayScreen=document.getElementById("value-display");

let currentOperand = "", previousOperand = "", operator = "". result = 0;



function compute() {

    function asign() {
        previousOperand = JSON.parse(currentOperand);
        currentOperand = "";
    }
    function reAsign() {
        previousOperand = JSON.parse(String(result));
        currentOperand = "";
        result = 0;
    }

    if (!previousOperand && currentOperand.length > 0) {
        if (currentOperand.length === 1 && !currentOperand.includes("-")) {
            asign();
        }
        else if (currentOperand.length > 1) {
            asign();
        }
    }
    else {
        switch(operator) {
            case "minus" :
                result = ( (parseFloat(previousOperand) *1000) - (parseFloat(currentOperand) *1000) ) /1000; ///<<< back solution ignores the sign used between two values only looks into the sign that trigger it
                reAsign();
            break;

            case "plus" :
                result = ( (parseFloat(previousOperand) *1000) + (parseFloat(currentOperand) *1000) ) /1000; ///<<< back solution ignores the sign used between two values only looks into the sign that trigger it
                reAsign();
            break;
            
            case "multiply" :
                result = parseFloat(previousOperand) * parseFloat(currentOperand);
                reAsign()
            break;

            case "divided" :
                result = parseFloat(previousOperand) / parseFloat(currentOperand);
                reAsign()
            break;
        }
    }
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
            // was it the dot sign
            if (buttonValue === ".") {
                // is it allowed
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
                case "+" :
                    compute();
                    operator="plus";
                break;

                case "-" : 
                    // does "-" mean a negative sign ATM
                    if (!currentOperand.includes("-") && currentOperand.length === 0) {
                        currentOperand += "-";
                    }
                    else {
                        compute();
                        operator = "minus";
                    }
                break;

                case "x" :
                    compute();
                    operator="multiply";
                break;
                
                case "/" :
                    compute();
                    operator="divided";
                break;
        
                case "=" :
                    compute();
                    resetScreen = true;
                break;

                case "RESET" :
                    currentOperand = "", previousOperand = "", operator = "", result = 0;
                    displayScreen.innerText = 0;
                return

                case "DEL" :

                    if (currentOperand.length > 0) {
                        currentOperand = currentOperand.slice(0. -1);
                        console.log(currentOperand)
                        
                    }
                break;
            }

        }
        displayUpdate();
    })
})



