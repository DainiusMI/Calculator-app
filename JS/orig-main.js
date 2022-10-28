
const inputArr = [];
const buttons=document.querySelectorAll(".button");
const displayScreen=document.getElementById("value-display");

let firstValue, secondValue, result;

function updateDisplay() {
    displayScreen.innerHTML=inputArr.join("");
}


// this function is only triggered by buttons without "function" class and only enters numbers
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
}



buttons.forEach(function(currentButton) {
    currentButton.addEventListener("click",function () {

            const value = currentButton.innerHTML;


            function reset() {

                inputArr.length=0;
                displayScreen.innerHTML=0;
                result = undefined;

            }

            // uses values in array to create a number and resets the array
            function assignValue(name) {

                name = parseFloat(inputArr.join(""));
                inputArr.length = 0;
                return name

            }
 
            // check if the pressed button is not a "function"
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
                        // check if there is anything entered
                        if (inputArr.length > 0) {
                            if (result === undefined) {
                                result = assignValue();
                            }
                            else {
                                result = ( result * 1000 + assignValue() * 1000 ) / 1000;
                                displayScreen.innerHTML = result;
                            }
                            console.log(result);
                        }
                    break;
                    
                }
            }
            console.log(value)
        } )
    }
);

function evil(fn) {
    return new Function('return ' + fn)();
  }
  
  console.log(evil('12/5*9+9.4*2'));

  let apa = "12/5*9+9.4*2";
  console.log(eval(apa));
















