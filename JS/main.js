
  
const buttons=document.querySelectorAll(".button");
const displayScreen=document.getElementById("value-display");

let currentOperand = "", previousOperand = "", operator = "", result;
let resetScreen = false, equals = false;


function compute() {

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
                console.log(result)
                asign();
            break;

            case "plus" :
                result = ( (parseFloat(previousOperand) *1000) + (parseFloat(currentOperand) *1000) ) /1000;
                asign();
            break;
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



function displayUpdate() {
    if (!previousOperand && !currentOperand || resetScreen) {
        displayScreen.innerText = 0;
    }
    else if (previousOperand !== "" && currentOperand.length === 0) {
        displayScreen.innerText = previousOperand;
    }
    else
        displayScreen.innerText = currentOperand;   
}



buttons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {

        const buttonValue = currentButton.innerText;

        function checkOperator(arg) {
            if (currentOperand.length > 0) {
                operator=arg;
                compute();
            }
        }
        // a none function button has been clicked
        if (!currentButton.classList.contains("function")) {
            resetScreen = false;
            



            if (previousOperand.length >0) {
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
            switch (buttonValue) {
                case "+" :
                    checkOperator("plus");
                   
                
              
                break;

                case "-" : 
                    // does "-" mean a negative sign ATM
                    if (!currentOperand.includes("-") && currentOperand.length === 0) {
                        currentOperand += "-";
                    }
                    else {
                        checkOperator("minus");
                        console.log(previousOperand)
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

                break;

                case "RESET" :
                    currentOperand = "", previousOperand = "", operator = "", result = 0;
                    resetScreen = true;
                break;

                case "DEL" :
                    if (currentOperand.length > 0) {
                        currentOperand = currentOperand.slice(0, currentOperand.length -1); 
                        if (currentOperand.length ===0) {
                            resetScreen = true;
                        }
                    }
                break;
            }

        }
       
        displayUpdate();
    })
})



