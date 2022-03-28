const result = document.createElement("div");
result.classList.add("grid");
const userChoiceDisplay = document.createElement("h1");
userChoiceDisplay.classList.add("user_span");
const computerChoiceDisplay = document.createElement("h1");
computerChoiceDisplay.classList.add("user_span");
computerChoiceDisplay.classList.add("computer_choice");
const resultDisplay = document.createElement("h1");
resultDisplay.classList.add("message");
const gameGrid = document.getElementById("choice");
const count = document.querySelector(".count");
const mode = document.querySelector("#mode");

let your_score = 0;
let computer_score = 0;
let round = 200;
count.textContent = round;
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;

const handleClick = (e) => {
  userChoice = e.target.id;
  round--;
  count.style.color = `hsl(${round}, 70%, 50%)`;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
  get_score();
};

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = computerChoice;
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.setAttribute("class", i);
  button.id = choices[i]; // you can delete this id you want to use e.target.HTML in the handleClick
  let text = choices[i].replace(choices[i][0], choices[i][0].toUpperCase());
  button.innerHTML = text;
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
}
const getResult = () => {
  count.innerHTML = round;
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = "YOU WIN!";
      your_score += 1;
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = "YOU LOSE!";
      computer_score += 1;
      console.log(computer_score);
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      resultDisplay.innerHTML = "ITS A DRAW!";
      break;
  }
};

function get_score() {
  document.getElementById("your_values").textContent = your_score;
  document.getElementById("computer_values").textContent = computer_score;

  if (round == 0) {
    alert("it's True Draw 🤝");
    finshed();
  }
  if (your_score == 50) {
    alert("🎉🎉🎉Yeah! You are the True Winner 🎊🎊🎊");
    finshed();
  } else if (computer_score == 50) {
    alert("🙄 You! loser 🤕");
    finshed();
  }
}
get_score();
const finshed = () => {
  alert("Play again!");
  window.location.href = window.location;
};

// change mode
const setmode = () => {
  if (mode.value == "easy") {
    round = 200;
  } else if (mode.value == "hard") {
    round = 150;
  } else if (mode.value == "impossable") {
    round = 100;
  }
  your_score = 0;
  computer_score = 0;
  count.innerHTML = round;
  document.getElementById("your_values").textContent = your_score;
  document.getElementById("computer_values").textContent = computer_score;
};
