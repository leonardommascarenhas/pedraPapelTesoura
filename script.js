function computerSelection() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "pedra";
  }
  if (random == 1) {
    return "papel";
  }
  if (random == 2) {
    return "tesoura";
  }
}
const pedra = document.querySelector(".pedra");
const papel = document.querySelector(".papel");
const tesoura = document.querySelector(".tesoura");

function playerChoice(e) {
  e.preventDefault();
  let jogadaPlayer = "";
  if (e.target.classList.contains("pedra")) {
    jogadaPlayer = "pedra";
  }
  if (e.target.classList.contains("papel")) {
    jogadaPlayer = "papel";
  }
  if (e.target.classList.contains("tesoura")) {
    jogadaPlayer = "tesoura";
  }
  return jogadaPlayer;
}

pedra.addEventListener("click", playerChoice);
papel.addEventListener("click", playerChoice);
tesoura.addEventListener("click", playerChoice);

function round(jogadaPlayer, jogadaComputer) {
  if (jogadaPlayer === jogadaComputer) {
    return "empate";
  }
  if (
    (jogadaPlayer == "pedra" && jogadaComputer == "tesoura") ||
    (jogadaPlayer == "papel" && jogadaComputer == "pedra") ||
    (jogadaPlayer == "tesoura" && jogadaComputer == "papel")
  ) {
    return "player";
  }
  if (
    (jogadaPlayer == "pedra" && jogadaComputer == "papel") ||
    (jogadaPlayer == "papel" && jogadaComputer == "tesoura") ||
    (jogadaPlayer == "tesoura" && jogadaComputer == "pedra")
  ) {
    return "computador";
  }
}

jogadaPlayer = playerChoice();
