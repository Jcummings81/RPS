
var winConditions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

var rock = document.getElementById('Rock').value
var paper = document.getElementById('Paper').value
var scissors = document.getElementById('Rock').value

console.log(rock + paper + scissors)

document.getElementById('generate').onclick = function() {
};

	var computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  compare(userChoice, computerChoice);



function compare(choice1, choice2) {
  document.getElementById('compOutput').innerText = choice2;
  debugger
  if (choice1 === choice2) {
    result = 'The result is a tie!';
  } else if (winConditions[choice1] === choice2) {
  	result = 'Player wins!';
  } else {
  	result = 'Computer wins';
  }
  
  document.getElementById('winOutput').value = result;
}