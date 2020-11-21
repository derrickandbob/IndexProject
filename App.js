// Selects elements in html
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let offButton = document.querySelector("#off")
let onButton = document.querySelector("#on")
let profile = document.querySelector(".profile")
let aboutUs = document.querySelector(".aboutUs")
let result = document.querySelector("#result")

// Disables all numbers when clicked
offButton.addEventListener("click",()=>{
    numbers.forEach(eachNumber=>{
        displayUserInput("")
        displayOutput("")
        eachNumber.disabled = true;
    })
    operators.forEach(eachOperator=>{
        eachOperator.disabled = true
    })
})

// Enables all buttons when clicked
onButton.addEventListener("click",()=>{
    numbers.forEach(forEachNumber=>{
        forEachNumber.disabled = false;

        numbers.forEach(getNumber=>{
            aboutUs.style.display = "none"
            result.style.display = "block"
            getNumber.style.display = "block"
        })
        operators.forEach(getOperator=>{
            getOperator.style.display = "block"
        })

    })
    operators.forEach(forEachOperator=>{
        forEachOperator.disabled = false
    })
})

// Functions
function getUserInput(){
    return document.getElementById("previousData-value").innerText;
}
function displayUserInput(num){
    return document.getElementById("previousData-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function displayOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText = num;
    }
    else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num =="-"){
        return ""
    }
    let n = Number(num);
    let value = n.toLocaleString("en")
    return value
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''))
}
let operator = document.getElementsByClassName("operator")
for(let i=0; i<operator.length; i++){
    operator[i].addEventListener("click",function(){
        if(this.id == "clear"){
            displayUserInput("")
            displayOutput("")
        }
        if(this.id == "backspace"){
            let outputValue = reverseNumberFormat(getOutput()).toString();
            if(outputValue){
                outputValue = outputValue.substr(0,outputValue.length-1)
                displayOutput(outputValue)
            }
        }
        else{
            let outputValue = getOutput()
            let previousData = getUserInput()
            if(outputValue==""&&previousData!=""){
                if(isNaN(previousData[previousData.length-1])){
                    previousData = previousData.substr(0,previousData.length-1)
                }
            }
            if(outputValue!="" || previousData!=""){
                outputValue = outputValue==""? outputValue:reverseNumberFormat(outputValue)
                previousData = previousData + outputValue
                if(this.id=="="){
                    let result = eval(previousData)
                    displayOutput(result)
                    displayUserInput("")
                }
                else{
                    previousData = previousData + this.id
                    displayUserInput(previousData)
                    displayOutput("")
                }
            }
        }
    })
}

// Show About Us Page
profile.addEventListener("click",function(){
    numbers.forEach(getNumber=>{
        getNumber.style.display = "none"
        result.style.display = "none"
    })
    operators.forEach(getOperator=>{
        getOperator.style.display = "none"
        aboutUs.style.display = "block"
    })
})

// Prints outputValue on screen
let number = document.getElementsByClassName("number")
for(let i=0; i<number.length; i++){
    number[i].addEventListener("click",function(){
        let outputValue = reverseNumberFormat(getOutput())
        if(outputValue!=NaN){
            outputValue = outputValue + this.id
            displayOutput(outputValue)
        }
    })
}