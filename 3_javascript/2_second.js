var secretNumber = 4;

var stringGuess =prompt("Guess a number");
var guess = Number(stringGuess);

if(guess === secretNumber){
    alert("You got it rigit!");
} else if(guess > secretNumber){
    alert("Too high");
} else if (guess < secretNumber){
    alert("Too low");
} else{
    alert("wrong");
}