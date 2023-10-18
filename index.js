function getComputerChoice(min, max) {              
    return Math.floor(Math.random() * (max - min +1) + min);
  }
  
  let computerChoice = getComputerChoice(1, 3)
  let computerSelection = ""

  if (computerChoice == 1) {
    computerSelection = ("Paper")
  } else if (computerChoice == 2) {
    computerSelection = ("Scissors")
  } else {
    computerSelection = ("Rock")
  }

  let playerSelection = prompt("Would you like to choose rock, paper or scissors? ").toLocaleLowerCase();

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Paper") {
        return ("You lose! Paper beats Rock")
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return ("You win! Rock beats Scissors")
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        return ("You win! Scissors beat Paper")
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return ("You lose! Rock beats Scisors")
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return ("It's a draw!")
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        return ("It's a draw!")
    } else if (playerSelection == "rock" && computerSelection == "Rock") {
        return ("It's a draw!")
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return ("You win! Paper beats Rock")
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return ("You lose! Scissors beat Paper ")
    }
  }

  let result = playRound(playerSelection, computerSelection);
  console.log(result);
