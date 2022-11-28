//VARIABLES

const solLuna = document.getElementById("sol-luna");
const html = document.getElementById("html");

const displayOne = document.getElementById("display-uno");
const displayTwo = document.getElementById("display-dos");
const allButtons = document.getElementById("all-buttons"); // revisar si sirve
const numbers = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".op");
const del = document.getElementById("del");
const dot = document.getElementById("dot");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const tempResult = document.getElementById("temp-result") 


const setTheme = theme => document.documentElement.className = theme

solLuna.addEventListener("click", () => {
    if(html.classList.contains("light")){
        html.setAttribute("class", "dark")
    }
    html.setAttribute("class", "light")
})


let disOne = "";
let disTwo = "";
let lastOp = "";
let result = null;
let haveDot = false;

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if(e.target.innerText === "." && !haveDot){
            haveDot = true
        }
        else if (e.target.innerText=== "." && haveDot){
            return 
        }
        disTwo += e.target.innerText;
        displayTwo.innerText = disTwo
    })
});


operations.forEach(operation => {
    operation.addEventListener("click", (e) => {
        if(!disTwo)result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(disOne && disTwo){
            mathOperation();
        }
        else{
            result = parseFloat(disTwo);
        }
        clearVar(operationName);
        lastOp = operationName;
    })
});

function clearVar(name = ""){
    disOne += disTwo + " " + name + " ";
    displayOne.innerText = disOne;
    displayTwo.innerText = "0";
    disTwo = ""
    tempResult.innerText = result;
}

function mathOperation(){
    if(lastOp === "X"){
        result = parseFloat(result) * parseFloat(disTwo);
    }
    else if (lastOp === "+"){
        result = parseFloat(result) + parseFloat(disTwo);
    }
    else if (lastOp === "-"){
        result = parseFloat(result) - parseFloat(disTwo);
    }
    else if (lastOp === "/"){
        result = parseFloat(result) / parseFloat(disTwo);
    }
}

equal.addEventListener("click", (e) => {
    if(!disTwo || !disOne) return;
    haveDot = false;
    mathOperation();
    clearVar();
    displayTwo.innerText = result;
    tempResult.innerText = "";
    disTwo = result;
    disOne = "";
})

reset.addEventListener("click", (e) => {
    displayOne.innerText = "0";
    displayTwo.innerText = "0";
    disOne = "";
    disTwo = "";
    result = "";
    tempResult.innerText = "0";
});

del.addEventListener("click", (e) => {
    displayTwo.innerText = "0";
    disTwo = "";
})

window.addEventListener("keydown", (e)=> {
    if(
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ){
        clickButtonEl(e.key);
    }
    else if(
        e.key === "*" ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === "/"
    ){
        clickOperation(e.key)
    }
    else if (e.key === "*"){
        clickOperation("X")
    }
    else if(e.key === "Enter" || e.key === "="){
        clickEqual();
    }
});

function clickButtonEl(key){
    numbers.forEach(button =>{
        if(button.innerText === key){
            button.click()
        }
    })
}

function clickOperation(key){
    operations.forEach(button =>{
        if(button.innerText === key){
            button.click();
        }
    })
}

function clickEqual(key){
    equal.click()
}