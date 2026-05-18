let computerScore = 0;
let yourScore = 0;
let capturedValue = '';
s
gameArray = [[["Tie! Pick again."], ['Computer wins!'], ['You win!']],
             [['You win'], ['Tie! Pick again.'], ['Computer wins!']],
             [['Computer wins!'], ['You win'], ['Tie! Pick again.']]];


function captureInput() {
  const inputElement = document.getElementById("userInput");
  const capturedValue = inputElement.value;
  console.log("User entered:", capturedValue);
  return;
}

for (i = 0; i < 5; i++) {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  let capturedValue = captureInput();
  const humanPickIndex = choices.indexOf(capturedValue.toLowerCase());

  if (gameArray[humanPickIndex][randomNumber] === 'Computer wins!') {
    computerScore++;
    console.log(`Computer wins! Computer: ${computerScore} You: ${yourScore}`);
  }
  else if (gameArray[humanPickIndex][randomNumber] === 'You win!') {
    yourScore++;
    console.log(`You win! Computer: ${computerScore} You: ${yourScore}`);
  }
  else {
    console.log(`Tie! Pick again.`);
  }
}








