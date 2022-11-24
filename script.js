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
    const gameDuelMessage =
      "Your choice: " +
      choice +
      ", computer's choice: " +
      cpuChoice +
      ". Result: ";
    //if(winner) console.log("YOU WIN!");
    //else if(winner==false) console.log("YOU LOSE!");
    //here grab the div that we want to append to
    const resultsContainer = document.querySelector("#result-window");
    //create tag here that we are going to add
    const gameResult = document.createElement("p");
    gameResult.classList.add("gameResult");
    gameResult.textContent = gameDuelMessage;
    //output text saying we won and increment user wins
    if (winner) {
      gameResult.textContent += "YOU WIN THIS ROUND!";
      yourWins++;
    }
    //output text saying we lost and increment computer wins
    else if (winner == false) {
      gameResult.textContent += "YOU LOSE THIS ROUND!";
      CPUWins++;
    }
    //output we tied
    else gameResult.textContent += "YOU TIED!";

    //here we cerate div that will go inside results div
    //const currentResults = document.createElement("h2");
    //add class/style to div
    //currentResults.classList.add("currentResults");
    const score = document.querySelector("#score-counter");
    //TODO
    //if someone obtains 5 load end screen page
    if (yourWins == 5 || CPUWins == 5) {
      score.textContent =
        "You: " + yourWins + " | Computer: " + CPUWins;
      window.alert(gameWinner(yourWins, CPUWins));
      location.reload();
    } else {
      score.textContent =
        "You: " + yourWins + " | Computer: " + CPUWins;
    }
    //append gameresult  message to currentResult div
    //gameResult.append(currentResults);

    //append whole results to result window
    resultsContainer.append(gameResult);
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
