`use strict`;
let userScore = 0;
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

// question 1
let oneQuestion = prompt("I was born in Denver. Is Denver the capital of Colorado? Answer yes/no").toLowerCase();
console.log('You answered', oneQuestion);

if (oneQuestion == 'yes') {
    alert('Correct, Denver is the capital of Colorado');
    userScore++;
}
else {
    alert('Not correct');
}

// question 2
let twoQuestion = prompt("Did I live in Las Vegas prior to moving to Kirkland? Answer YES/NO").toUpperCase();
console.log('You answered', twoQuestion);

if (twoQuestion == 'YES') {
    alert('Correct! Viva Las Vegas');
    userScore++;
}
else if (twoQuestion != 'yes') {
    alert('incorrect!');
}

// question 3
let threeQuestion = prompt("Was I a real estate agent before this? Answer yes/no").toLowerCase();
console.log('You answered', threeQuestion ,);

if (threeQuestion == 'yes') {
    alert('That is true');
    userScore++;
}
else if (twoQuestion != 'yes') {
    alert('Incorrect');
}

// question 4
let fourQuestion = prompt("I have a bachelor's degree? Answer YES/NO").toUpperCase();
console.log('You answered', fourQuestion);

if (fourQuestion == 'YES') {
    alert('Correct');
    userScore++;
}
else if (fourQuestion == 'NO') {
    alert('Incorrect');
}
else {
    alert('Wrong input');
}

// question 5
let fiveQuestion = prompt("The Denver Nuggets are the best team in the NBA? Answer yes/no").toLowerCase();
console.log('The Denver Nuggets are the best team:', fiveQuestion);

if (fiveQuestion == 'yes') {
    alert('Correct, they are the best')
    userScore++;
} 
else if (fiveQuestion == 'no') {
    alert('You know they are the best, do not lie');
}
else {
    alert('Wrong input');
}


// question 6
for (let i = 0; i < 4; i++) {
    let sibling = prompt("How many siblings do I have?");
    guessSiblings = parseInt(sibling);
    if (guessSiblings == 2) {
        alert('Correct');
        userScore++;
        break;
    }
    else if (guessSiblings > 2) {
        alert('Too High');
    }
    else if (guessSiblings < 2) {
        alert('Too Low');
    }
    if (i === 3) {
        alert('Wrong, I have 2 siblings');
    }
    console.log('I have 2 siblings')
}  


// question 7
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
            userScore++;
            break;

        } 
    }
    if (correctGuess) {
        break;
    } else {
        alert('No, keep trying');
    }
}

// final score out of 7 questions

alert(`You got ${userScore} correct out of 7`);
