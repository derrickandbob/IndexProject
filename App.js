// Selectors
const offButton = document.querySelector(".powerOff");
const onButton = document.querySelector(".powerOn");
const screen = document.querySelector(".screen");
const allNumbers = document.querySelectorAll(".numb")
const allOperators = document.querySelectorAll(".operator")
const clearScreen = document.querySelector(".clearBtn")
const solve = document.querySelector(".answer")


// // Turn off calculator
// offButton.addEventListener("click",()=>{
//     if(offButton.classList.contains(".powerOff")){
//         console.log("Yeah")
//         disableCalculator()
//     }
// })

// // Disable all buttons onload
// document.addEventListener("DOMContentload",()=>{
//     allNumbers.disabled == true;
//     allOperators.disabled == true;
// })


// //Disable Calculator
// function disableCalculator(){
//     allNumbers.disabled = true
//     allOperators.disabled = true
//     screen.innerHTML = "Power off"
// }
// Get all the numbers onclicked
allNumbers.forEach(userInput=>{
    userInput.addEventListener("click",()=>{
        let displayUserValue = userInput.value; 
        screen.textContent += displayUserValue;
        screen.classList.add("styleUserInput")
    })

})




// Get all the operators onclicked
allOperators.forEach(operator=>{
    operator.addEventListener("click",()=>{
        screen.textContent += operator.value;
        screen.classList.add("styleUserInput")
    })
})


// Clear Screen
clearScreen.addEventListener("click",()=>{
    screen.innerHTML = "";
})



