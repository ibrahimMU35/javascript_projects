const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb" //cheat code
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};

//console.log(getUserChoice('Paper'));
//console.log(getUserChoice('fork'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "the game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won";
    }
  }
  if (userChoice === "bomb") {
    return "You won!";
  }
};
//console.log(determineWinner('paper', 'paper'));

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
