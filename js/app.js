`use strict`;

let user = prompt("Hello! What is your name?");
console.log('Hi', user);
document.write(`Hello ${user}, welcome to the site!`)

if (user == 'joe') {
    alert('Joe is a cool name');
}
else if(user == 'sarah') {
    alert('Sarah is a nice name');
}
else if(user == 'jb') {
    alert('JB is the instructor');
}
else {
    alert('Your name is hard to guess');
}


let oneQuestion = prompt("What is the capital of Colorado?");
console.log('You said the capital of Colorado is', oneQuestion);

if (oneQuestion == 'denver') {
    alert('Correct, Denver is the capital of Colorado');
}
else {
    alert('That is not the capital of Colorado');
}


let twoQuestion = prompt("Are you able to skateboard?");
console.log('You said', twoQuestion ,'to skateboarding');

if (twoQuestion == 'yes') {
    alert('That is impressive you know how to skateboard');
}
else if (twoQuestion != 'yes') {
    alert('skateboarding is hard!');
}


let threeQuestion = prompt("Can you code in javascript?");
console.log('You said', threeQuestion ,'to coding in javascript');

if (threeQuestion == 'yes') {
    alert('Nice! You got this');
}
else if (twoQuestion == 'no') {
    alert('No worries, keep practicing');
}


let fourQuestion = prompt("How many NFL teams are there?");
console.log('You answered there are', fourQuestion ,'NFL teams');

if (fourQuestion == '32') {
    alert('Correct');
}
else if (fourQuestion == 'thirty two') {
    alert('Correct');
}
else {
    alert('Not quite');
}
