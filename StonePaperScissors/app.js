
let userScore=0;
let compScore=0;

const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const message = document.getElementById("msg");
// const msgContainer = document.getElementsByClassName("msg-container");

let choices=document.querySelectorAll(".choice");

const genCompChoice = () => {
  const options = ["rock","paper" ,"scissors"];
  const idx=Math.floor(Math.random()*3);
  return options[idx];
}

const drawGame = () => {
  message.textContent = "It's a draw!";
  message.style.backgroundColor="black";
}

const winGame = (userChoice,compChoice) => {
  userScore++;
  userScoreSpan.textContent = userScore;
  message.textContent = `You win! your ${userChoice} beats ${compChoice}`;
  message.style.backgroundColor="green";
};

const loseGame = (userChoice,compChoice) => {
  compScore++;
  compScoreSpan.textContent = compScore;
  message.textContent = `You lose! ${userChoice} beats your ${compChoice}`;
  message.style.backgroundColor="red";
};

const playGame = (userChoice) => {
  const compChoice= genCompChoice();
  console.log(`user choice ${userChoice}`);
  console.log(`computer choice ${compChoice}`);

  if(userChoice == compChoice){
    drawGame();
  } 
  else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    winGame(userChoice,compChoice);
  } 
  else {
    loseGame(userChoice,compChoice);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click" ,() => {
     const userChoice=choice.getAttribute("id");
     
     playGame(userChoice);
  })
});
