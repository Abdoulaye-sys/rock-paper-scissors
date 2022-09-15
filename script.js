const TotalScore = { playerScore : 0 , computerScore : 0};
function getComputerChoice() {
  const CuChoise = ["Rock" , "Paper" , "Scissors"];
  let index = Math.floor(Math.random()*CuChoise.length);
  return CuChoise[index];
}

function getResult(playerChoice, computerChoice) {
  let score ;
  
  if(playerChoice == computerChoice ) {
    score = 0;
  }
  else if (playerChoice == "Rock" && computerChoice == "Scissors")  {
     score = 1;
  } else if(playerChoice == "Paper" && computerChoice == "Rock") {
     score = 1;
  }else if(playerChoice == "Scissors" && computerChoice == "Paper"){
     score = 1;
  } else {
    score = -1;
  }
  return score;
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const playerScoreDiv = document.getElementById('player-score');
  const handsDiv = document.getElementById('hands');
  const resultDiv = document.getElementById('result');
  handsDiv.innerText = `  🧑‍🦰 ${computerChoice} vs   ${playerChoice} 🤖  `;
  // Hint: on a score of -1
  if (score == 1) {
    playerScoreDiv.innerText = " 😁 Bravo vous avez gagnez";
  } else if (score == -1) {
    playerScoreDiv.innerText = "boooo vous avez perdu 😭 ";
  }

  else {
    playerScoreDiv.innerText = "Match Nul 😅  ; c'est mieux que rien";
  }

  resultDiv.innerText = `Votre Score : ${TotalScore['playerScore']}`;

  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  TotalScore['playerScore'] += score;
  console.log({playerChoice});
  console.log({computerChoice});
  console.log({score});
  console.log(TotalScore);
  showResult(score, computerChoice, playerChoice);
  
}

function playGame() {
  const buttons = document.querySelectorAll('.rpsButton')
  buttons.forEach(button => {
    button.onclick = () => onClickRPS(button.value);
  })  
  // let endGameButton = document.getElementById('endGameButton')
  // endGameButton.onclick = () => endGame()
  endGame();
}

function endGame() {
  let endGameButton = document.getElementById('endGameButton');

  endGameButton.onclick = () => {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}
}

playGame()