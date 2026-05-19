let computerScore = 0;
let yourScore = 0;
const choices = ['rock', 'paper', 'scissors'];

gameArray = [[["Tie! Pick again."], ['Computer wins!'], ['You win!']],
             [['You win'], ['Tie! Pick again.'], ['Computer wins!']],
             [['Computer wins!'], ['You win'], ['Tie! Pick again.']]];


function playRound() {
  const inputElement = document.getElementById("userInput");
  const capturedValue = inputElement.value.toLowerCase();

  const humanPickIndex = choices.indexOf(capturedValue);
  const computerPickIndex = Math.floor(Math.random() * 3);

  if (humanPickIndex === -1) {
    console.log("Invalid input. Please choose rock, paper, or scissors.");
    return;
  }

  const result = gameArray[humanPickIndex][computerPickIndex][0];
  console.log(result);
  
  if (result === "You win!") {
    yourScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  } 
  console.log(result);
  console.log(`Your Score: ${yourScore} | Computer Score: ${computerScore}`);
}

  
  








