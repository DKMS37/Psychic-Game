 /// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var wins = 0;
 var losses = 0;
 var guessLeft = 9; 
 var userText = [];
 var userGuess = null;

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) { 
   // Determines which key was pressed.
 var userGuess = event.key;
 var userText = event.key;
 var guessleft = event.key;

 // Randomly chooses a choice from the options array. This is the Computer's guess.
 var computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];

   if(userGuess === computerGuess){
   wins++;
   guessLeft = 9; 
   userText = [];
   computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];
   }

   if (userGuess === computerChoices){
     guessLeft--;
   
   }

   if (userGuess === userText){
     guessLeft--;   
   }

   if (guessLeft === 0){
     losses++;
     guessLeft = 9;
     userText = [];
     computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];

   }
        

   console.log("userGuess: " + userGuess);
   console.log("comp guess: " + computerGuess);
   console.log("wins: ");
   console.log("guessLeft: ");
   console.log("event.key: ");

   document.getElementById("wins").textContent = wins;
   document.getElementById("losses").textContent = losses;
   document.getElementById("guessLeft").textContent = guessLeft;
   document.getElementById("userText").textContent = userText;

};
