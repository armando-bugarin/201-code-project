`use strict`;

let user = prompt("Hello! What is your name?");
console.log('Hi', user);
document.write(`Hello ${user}, welcome to the site!`)

let userLowercase = user.toLowerCase();
if (userLowercase == 'mark') {
    alert('Mark is a cool name');
}
else {
    alert('Welcome!');
}


let oneQuestion = prompt("Is Denver the capital of Colorado? Answer yes/no").toLowerCase();
console.log('You answered', oneQuestion);

if (oneQuestion == 'yes') {
    alert('Correct, Denver is the capital of Colorado');
}
else {
    alert('Not correct');
}


let twoQuestion = prompt("Are you able to skateboard? Answer YES/NO").toUpperCase();
console.log('You answered', twoQuestion);

if (twoQuestion == 'YES') {
    alert('That is impressive you know how to skateboard');
}
else if (twoQuestion != 'yes') {
    alert('skateboarding is hard!');
}


let threeQuestion = prompt("Was I a real estate agent before this? Answer yes/no").toLowerCase();
console.log('You answered', threeQuestion ,);

if (threeQuestion == 'yes') {
    alert('That is true');
}
else if (twoQuestion != 'yes') {
    alert('Incorrect');
}


let fourQuestion = prompt("I have a bachelor's degree? Answer YES/NO").toUpperCase();
console.log('You answered', fourQuestion);

if (fourQuestion == 'YES') {
    alert('Correct');
}
else if (fourQuestion == 'NO') {
    alert('Incorrect');
}
else {
    alert('Wrong input');
}


let fiveQuestion = prompt("The Denver Nuggets are the best team in the NBA? Answer yes/no").toLowerCase();
console.log('The Denver Nuggets are the best team:', fiveQuestion);

if (fiveQuestion == 'yes') {
    alert('Correct, they are the best')
} 
else if (fiveQuestion == 'no') {
    alert('You know they are the best, do not lie');
}
else {
    alert('Wrong input');
}


for (let i = 0; i < 4; i++) {
    let sibling = prompt("How many siblings do I have?");
    parseInt(sibling);
    if (sibling == 2) {
        alert('Correct');
        break;
    }
    else if (sibling > 2) {
        alert('Too High');
    }
    else if (sibling < 2) {
        alert('Too Low');
    }
    else {
        alert('Wrong, I have 2 siblings');
    }
    console.log('I have 2 siblings')
}  


let cities = ["dubai", "bruges", "amsterdam", "cologne", "cambridge", "london"]
let guessAttempt = 0
let correctGuess = false;

console.log(cities)

while(guessAttempt < 6) {
    guessAttempt++;
    let citiesInput = prompt("What is one of my favorite cities in the world?");
    console.log(citiesInput);
    for(let i = 0; i < cities.length; i++) {
        if (citiesInput === cities[i]) {
            alert('You got it!');
            correctGuess = true;
            break;

        } 
    }
    if (correctGuess) {
        break;
    } else {
        alert('No, keep trying');
    }
}
