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
    if (playerSelectionLower == computerSelection) {
      return "Tie, both of you selected the same object.";
    }
    //if not the same then execute following check
    //if playerselection is rock and
    //computerselection is paper then computer wins
    if (playerSelectionLower == "rock" && computerSelection == "paper") {
      return "You lose, paper beats rock.";
    }
    //case where you're rock and computer is scissors
    if (playerSelectionLower == "rock" && computerSelection == "scissors") {
      return "You win, rock beats scissors.";
    }
    //case where you're paper and computer is rock
    if (playerSelectionLower == "paper" && computerSelection == "rock") {
      return "You win, paper beats rock.";
    }
    //case where you're paper and computer is scissors
    if (
      playerSelectionLower == "paper" &&
      computerSelection == "scissors"
    ) {
      return "You lose, scissors beats paper";
    }
    //case where you're scissors and computer is rock
    if (playerSelectionLower == "scissors" && computerSelection == "rock") {
      return "You lose, rock beats scissors.";
    }
    //case where you're scissors and computer is paper
    if (playerSelection == "scissors" && computerSelection == "paper") {
      return "You win, scissors beats paper";
    }
  };
  
  //test here
  let userSelection = prompt("pick your choice");
  playRound(userSelection,getComputerChoice());