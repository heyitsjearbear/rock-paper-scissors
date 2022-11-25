let yourWins = 0;
let CPUWins = 0;
const gameWinner = (userWins, compWins) => {
  if (userWins == 5) {
    return "User wins, reloading page";
  } else if (CPUWins == 5) {
    return "Computer wins, reloading page";
  }
};
//here btnPressed stores a nodelist which stores all
//elements under class 'btn'
const btnPressed = document.querySelectorAll(".btn");
//foreach loop adds event listener
btnPressed.forEach((item) => {
  item.addEventListener("click", function (e) {
    //here play one round of rock paper scissors
    choice = e.srcElement.id;
    cpuChoice = getComputerChoice();
    //console.log("Your choice: " + choice + ", computer's choice: " + cpuChoice + '\n');
    const winner = playRound(choice, cpuChoice);
    
    const gameResult = document.querySelector('#round-result');
     
    if (winner) {
      yourWins++;
      gameResult.textContent = "You won! Your " + choice + " beats CPU's " + cpuChoice;
    }
    //output text saying we lost and increment computer wins
    else if (winner == false) {
      CPUWins++;
      gameResult.textContent = "You lost! Your " + choice + " was beat by CPU's " + cpuChoice;
    }
    else {
      gameResult.textContent = "TIED!";
    }
    //grab your-score id and update text
    const yourScore = document.querySelector('#your-score');
    yourScore.textContent = yourWins;

    //grab cpu-score id and update score based on game output
    const cpuScore = document.querySelector('#cpu-score');
    cpuScore.textContent = CPUWins;
    //if someone reaches 5 create button that will reload page
    if (yourWins == 5 || CPUWins == 5) {
      const playAgain = document.querySelector('#play-again');
      const againBtn = document.createElement('button');
      againBtn.classList.add('againBtn');
      againBtn.textContent = 'Play again';
      playAgain.appendChild(againBtn);
    }
    
    

    
  });
});
//Function to randomly picks rock paper or scissors
let getComputerChoice = () => {
  //create an array of the the 3 possible moves
  //so that we can randomly access one
  const gameChoice = ["rock", "paper", "scissors"];

  const randomChoice =
    gameChoice[Math.floor(Math.random() * gameChoice.length)];
  return randomChoice;
};
//Function to play one round of rock paper scissors
let playRound = (playerSelection, computerSelection) => {
  //Convert playerSelection to lowercase so we can begin comparing
  const playerSelectionLower = playerSelection.toLowerCase();
  //case where player is same as computer just output tie
  // if (playerSelectionLower == computerSelection) {
  //   console.log("YOU TIED");
  //   return;
  // }
  //if not the same then execute following check
  //if playerselection is rock and
  //computerselection is paper then computer wins
  if (playerSelectionLower == "rock" && computerSelection == "paper") {
    return false;
  }
  //case where you're rock and computer is scissors
  else if (playerSelectionLower == "rock" && computerSelection == "scissors") {
    return true;
  }
  //case where you're paper and computer is rock
  else if (playerSelectionLower == "paper" && computerSelection == "rock") {
    return true;
  }
  //case where you're paper and computer is scissors
  else if (playerSelectionLower == "paper" && computerSelection == "scissors") {
    return false;
  }
  //case where you're scissors and computer is rock
  else if (playerSelectionLower == "scissors" && computerSelection == "rock") {
    return false;
  }
  //case where you're scissors and computer is paper
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    return true;
  }
};

let game = () => {
  const userChoice = prompt("pick your choice");
  console.log("Your choice " + userChoice);
  let youWin = 0;
  let computerWin = 0;
  let compChoice;
  for (let i = 0; i < 5; i++) {
    compChoice = getComputerChoice();
    console.log("playing against " + compChoice);
    let play = playRound(userChoice, compChoice);
    if (play == "Tie") {
      console.log("You guys tied this round.");
    } else if (play) {
      console.log("You win this round");
      youWin++;
    } else if (!play) {
      console.log("You lose this");
      computerWin++;
    }
  }
  console.log("Your score: " + youWin + ", Computer score: " + computerWin);
  if (youWin == computerWin) {
    return "Lame... You tied with the computer";
  }
  if (youWin > computerWin) {
    return "You win!";
  }
  return "You lose.";
};
