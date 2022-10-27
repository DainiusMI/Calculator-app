
const result=0;
const inputArr=[];
const buttons=document.querySelectorAll(".button");
const displayScreen=document.getElementById("value-display");



function updateDisplay() {
    displayScreen.innerHTML=inputArr.join("");
}


// this function is only triggered by buttons without "function" class
function pushArr(value) {

    if (value === ".") {
        // check if symbol already exists
        if (inputArr.find(el => el == ".") != ".") {
            // add zero if array was empty
            if (inputArr.length == 0) {
                inputArr.push(parseInt(0));
            }
            inputArr.push(".");
        }
    }

    else {
        inputArr.push(parseInt(value));
    }

    updateDisplay();
    console.log(inputArr);
}






buttons.forEach(function(currentButton) {
    currentButton.addEventListener("click",function () {

            let value=currentButton.innerHTML;

            function reset() {
                inputArr.length=0;
                displayScreen.innerHTML=0;
            }

            if (!currentButton.classList.contains("function")) {
                pushArr(value);
            }

            else {
                switch (value) {
                    case "RESET" : 
                        reset();
                    break;

                    case "DEL": 
                    if (inputArr[0] === 0 && inputArr[1] === "." && inputArr.length == 2) {
                        reset();
                    }
                    else if (inputArr.length>0) {
                        inputArr.pop();
                        if (inputArr.length>0) {
                            updateDisplay();
                        }
                        else displayScreen.innerHTML=0;
                    }
                    break;
                    case "+":
                    
                }
            }
            console.log(value)
        } )
    }
);