let num1 = 6
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let totalEl = document.getElementById("total-el")

function add() {
    let result = num1 + num2
    totalEl.textContent = "Total: " + result
}

function subtract() {
    let result = num1 - num2
    totalEl.textContent = "Total: " + result
}

function divide() {
    let result = num1 / num2
    totalEl.textContent = "Total: " + result
}

function multiply() {
    let result = num1 * num2
    totalEl.textContent = "Total: " + result
}

