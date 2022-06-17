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

function playerChoice() {
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  return input;
}

function round(jogadaPlayer, jogadaComputador) {
  if (jogadaPlayer == jogadaComputador) {
    return "Empate";
  } else if (
    (jogadaPlayer == "pedra" && jogadaComputador == "tesoura") ||
    (jogadaPlayer == "tesoura" && jogadaComputador == "papel") ||
    (jogadaPlayer == "papel" && jogadaComputador == "pedra")
  ) {
    return "Player ganhou";
  } else {
    return "Computador ganhou";
  }
}

let jogadaPlayer = playerChoice();
let jogadaComputador = computerSelection();

function game() {
  for (let i = 0; i <= 5; i++) {
    let jogadaPlayer = playerChoice();
    let jogadaComputador = computerSelection();
    let resultado = round(jogadaPlayer, jogadaComputador);
    console.log(resultado);
  }
}

game();
