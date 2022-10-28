
// generate a string in display
// -10.5+-9.5

// input must not allow other sighns then minus at the begining of the string


// use REGEX to split it into two numbers and function operator
// move those numbers into array







const buttons=document.querySelectorAll(".button");
const displayScreen=document.getElementById("value-display");

let screenResult = 0;
let currentOperand = "", previousOperand = "";
//booleans to control logic

const decimalPoint = false;
const minusSign = false;
// used only if after equals user enters number not function
const clearScreen = false;



buttons.forEach(function(currentButton) {
    currentButton.addEventListener("click", function() {

        const buttonValue = currentButton.innerText;


        if (!currentButton.classList.contains("function")) {

        }

    })
})


