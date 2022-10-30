
  
const buttons=document.querySelectorAll(".button");
const displayScreen=document.getElementById("value-display");

let currentOperand = "", previousOperand = "", operator = "", result;
let reset = false, equalSign = false;


function asign() {

    if (result || result === 0) {
        previousOperand = JSON.parse(String(result));
        currentOperand = "";
        result = undefined;
    }
    else if (!previousOperand) {
        previousOperand = JSON.parse(currentOperand);
        currentOperand = "";
    }
}


function resetValues() {

    currentOperand = "", previousOperand = "", operator = "";
    reset = true;
}


function displayUpdate() {

    if (!previousOperand && !currentOperand || reset) {
        displayScreen.innerText = 0;
    }
    else if (previousOperand !== "" && currentOperand.length === 0) {
        displayScreen.innerText = previousOperand;
    }
    else
        displayScreen.innerText = currentOperand;   
}


function compute() {

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
                result = ( (parseFloat(previousOperand) *1000) - (parseFloat(currentOperand) *1000) ) /1000;
                asign();
            break;

            case "plus" :
                result = ( (parseFloat(previousOperand) *1000) + (parseFloat(currentOperand) *1000) ) /1000;
                asign();
            break;
            
            case "multiply" :
                result = parseFloat(previousOperand) * parseFloat(currentOperand);
                asign();
            break;

            case "divided" :
                result = parseFloat(previousOperand) / parseFloat(currentOperand);
                asign();
            break;
        }
    }
}


buttons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {

        const buttonValue = currentButton.innerText;

        
        if (currentButton.innerText != "RESET") {
            reset = false;
        }

        function checkOperator(arg) {

            equalSign = false;

            if (currentOperand.length > 0 || previousOperand) {
                operator=arg;
                compute();
            }
        }
        // a none function button has been clicked
        if (!currentButton.classList.contains("function")) {

   
            if (previousOperand.length > 0) {
                operator = "";
            }
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
            // asign value from screen if function was selected before entering a value
            if (!currentOperand && displayScreen.innerText != 0 && equalSign)  {
                currentOperand = parseFloat(displayScreen.innerText);
                asign();        

            }

            switch (buttonValue) {
                case "+" :
                    checkOperator("plus");
                break;

                case "-" : 
                    // if quealSign was used "minus" goes before negative sign
                    if (equalSign) {
                        checkOperator("minus");
                    }
                    // does "-" mean a negative sign ATM
                    else if (!currentOperand.includes("-") && currentOperand.length === 0) {
                        currentOperand += "-";
                    }
                    else {
                        checkOperator("minus");
                    }
                break;

                case "x" :
                    checkOperator("multiply");
             
                break;
                
                case "/" :
                    checkOperator("divided");
                break;
        
                case "=" :
                    compute();
                    equalSign = true;

                    displayUpdate();
                    resetValues();
                return

                case "RESET" :
                    resetValues();
                break;

                case "DEL" :
                    if (equalSign) {
                        resetValues();
                    }
                    if (currentOperand.length > 0) {
                        currentOperand = currentOperand.slice(0, currentOperand.length -1); 
                        if (currentOperand.length === 0) {
                            reset = true;
                        }
                    }
                break;
            }

        }

        displayUpdate();
    })
})


