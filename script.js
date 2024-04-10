const form = document.querySelector("form");
const nameInput = form.querySelector("input");
const welcomeText = document.querySelector("h1");
const diceBtn = document.querySelector("#dice-btn");
const freezeBtn = document.querySelector("#freeze");
const totalValueInfo = document.querySelector("#total-value");
const roundValueInfo = document.querySelector("#round-value");
const roundAmountInfo = document.querySelector("#amount-of-rounds");
const diceValue = document.querySelector("#dice-value");
let totalAmount = 0;
let roundAmount = 0;
let rounds = 0;

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    welcomeText.innerText = "Welcome " + nameInput.value;
    nameInput.value = ""; // Clears input field
    form.style.display = "none";
})

diceBtn.addEventListener("click", ()=>{
    const randomInt = Math.floor(Math.random() * 6) + 1; // Generates random value between 1-6
    roll(randomInt);
})

freezeBtn.addEventListener("click", ()=>{
    stop();
})

function roll(value) {
    diceValue.innerHTML = "Tärningen visar: " + value;
    if (value != 1) {
        roundAmount += value;
        roundValueInfo.innerHTML = "Rundvärde: " + roundAmount;
        if (roundAmount + totalAmount >= 100) {
            alert("You win!");
        }
    } else {
        roundAmount = 0;
        stop();
    }
}

function stop() {
    totalAmount += roundAmount;
    roundAmount = 0;
    rounds += 1;
    roundAmountInfo.innerHTML = "Antal rundor: " + rounds;
    totalValueInfo.innerHTML = "Totala värde: " + totalAmount;
}