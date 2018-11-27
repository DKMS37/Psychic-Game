 /// Creates an array that lists out all of the options (alphabet letters).
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var wins = 0;
 var losses = 0;
 var guessLeft = 9; 
 var userText = [];
 var userGuess = null;
 


// This function is run whenever the user presses a key.
    document.onkeyup = function(event) { 
// *FOUND THIS SOLUTION*
// "String from Character Code" 
//  Determines which key was pressed, will also avoid userGuess from choosing the same letter and subtracting 1 from Guesses Left.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // var userGuess = event.key;
    // var userText = event.key;
// Randomly chooses a choice from the options array. This is the Computer's choices.
    var computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];
// This function is run to restart Guesses Left, Letter Guessed so far, and computerGuess.
    var restart = function(){
      guessLeft = 9; 
      userText = [];
      computerGuess;
  };
    if(userText.indexOf(userGuess) < 0 && computerChoices.indexOf(userGuess) >= 0){userText[userText.length]=userGuess;
     guessLeft--;
    };

    if(userGuess === computerGuess){
      wins++;
      restart();
  };
  //   else (userGuess === userText);{
  //     guessLeft--; 
  // };

    if (guessLeft === 0){
      losses++;
      restart();
  };
 
  console.log("userGuess: " + userGuess);
  console.log("comp guess: " + computerGuess);
  console.log("wins: "+ wins);
  console.log("guessLeft: " + guessLeft);
  console.log("losses: " + losses); 
  

  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("guessLeft").textContent = guessLeft;
  document.getElementById("userText").textContent = userText;

}