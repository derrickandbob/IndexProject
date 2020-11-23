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
function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    return document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
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
            printHistory("")
            printOutput("")
        }
        if(this.id == "backspace"){
            let output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1)
                printOutput(output)
            }
        }
        else{
            let output = getOutput()
            let history = getHistory()
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1)
                }
            }
            if(output!="" || history!=""){
                output = output==""? output:reverseNumberFormat(output)
                history = history + output
                if(this.id=="="){
                    let result = eval(history)
                    printOutput(result)
                    printHistory("")
                }
                else{
                    history = history + this.id
                    printHistory(history)
                    printOutput("")
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

// Prints output on screen
let number = document.getElementsByClassName("number")
for(let i=0; i<number.length; i++){
    number[i].addEventListener("click",function(){
        let output = reverseNumberFormat(getOutput())
        if(output!=NaN){
            output = output + this.id
            printOutput(output)
        }
    })
}