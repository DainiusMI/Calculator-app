/*
const bntZero=document.getElementById("zero");
const bntOne=document.getElementById("one");
const bntTwo=document.getElementById("two");
const bntThree=document.getElementById("three");
const bntFour=document.getElementById("four");
const bntFive=document.getElementById("five");
const bnSix=document.getElementById("six");
const bntSeven=document.getElementById("seven");
const bntEight=document.getElementById("eight");
const bntNine=document.getElementById("nine");


const bnt=document.getElementById("");
*/
const result=0;
const inputArr=[];
const buttons=document.querySelectorAll(".button");
const displayScreen=document.getElementById("value-display");
console.log(buttons);

function updateDisplay() {
    displayScreen.innerHTML=inputArr.join("");
}
function checkForPoint() {
    return inputArr.includes(".") || inputArr.length===0;
}






buttons.forEach(
    function(currentButton) {
        currentButton.addEventListener("click",
        function () {
            let value=currentButton.innerHTML;
            if (parseInt(value)) {
                inputArr.push(parseInt(value));
                console.log(inputArr);
                updateDisplay();
            }
            else {
                switch (value) {
                    case "." : 
                    if (!checkForPoint()) {
                        inputArr.push(value);
                        updateDisplay();
                    } 
                    break;

                    case "RESET" : 
                    inputArr.length=0;
                    displayScreen.innerHTML=0;
                    break;

                    case "DEL": 
                    if (inputArr.length>0) {
                        inputArr.pop();
                        if (inputArr.length>0) {
                            updateDisplay();
                        }
                        else displayScreen.innerHTML=0;
                    }
                    break;


                }
            }
            console.log(value)
        } )
    }
);