const form = document.querySelector("form");
const nameInput = form.querySelector("input");
const welcomeText = document.querySelector("h1");
const diceBtn = document.querySelector("#dice-btn");
const freezeBtn = document.querySelector("#freeze");
const totalValueInfo = document.querySelector("#total-value");
const roundValueInfo = document.querySelector("#round-value");
const amountOfRounds = document.querySelector("#amount-of-rounds");
const diceValue = document.querySelector("#dice-value");
let totalAmount = 0; // Amount of points user gathers throughout all rounds
let roundAmount = 0; // Amount of points user gathers throughout playing round. Is added to total amount
let rounds = 0; // Amount of rounds user has played

// Gets name from form, used to display welcome message
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    welcomeText.innerText = "Välkommen " + nameInput.value;
    nameInput.value = ""; // Clears input field
    form.style.display = "none";
})

// Roll dice when clicked
diceBtn.addEventListener("click", ()=>{
    const randomInt = Math.floor(Math.random() * 6) + 1; // Generates random value between 1-6
    roll(randomInt);
})

// freeze round when clicked
freezeBtn.addEventListener("click", ()=>{
    stop();
})

// Function used when user rolls dice, if value is 1, stop round, otherwise add the points to round points. Also checks if user reaches 100 points
function roll(value) {
    diceValue.innerHTML = "Tärningen visar: " + value;
    if (value != 1) {
        roundAmount += value;
        roundValueInfo.innerHTML = "Rundvärde: " + roundAmount;
        // If user reaches 100 points or above, stop game and let them know how many rounds it took
        if (roundAmount + totalAmount >= 100) {
            rounds++;
            amountOfRounds.innerHTML = "Antal rundor: " + rounds;
            alert("Grattis, det tog dig " + rounds + " rundor innan du vann!");
        }
    } else {
        roundAmount = 0;
        stop();
    }
}

// Function changes the value of point variables, also changes the html-element to display the correct amount of points to user. Used when user freezes a round or rolls a 1
function stop() {
    totalAmount += roundAmount;
    roundAmount = 0;
    rounds++;
    amountOfRounds.innerHTML = "Antal rundor: " + rounds;
    totalValueInfo.innerHTML = "Totala värde: " + totalAmount;
    roundValueInfo.innerHTML = "Rundvärde: " + roundAmount;
}