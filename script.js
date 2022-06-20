let playerPoints = 0;
const playerCounter = document.querySelector(".playerPoints");
let computerPoints = 0;
const computerCounter = document.querySelector(".computerPoints");

function computerSelection() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    console.log("pc=pedra");
    return "pedra";
  }
  if (random == 1) {
    console.log("pc=papel");
    return "papel";
  }
  if (random == 2) {
    console.log("pc=tesoura");
    return "tesoura";
  }
}

const pedra = document
  .querySelector(".pedra")
  .addEventListener("click", () =>
    console.log(round("pedra", computerSelection()))
  );
const papel = document
  .querySelector(".papel")
  .addEventListener("click", () =>
    console.log(round("papel", computerSelection()))
  );
const tesoura = document
  .querySelector(".tesoura")
  .addEventListener("click", () =>
    console.log(round("tesoura", computerSelection()))
  );

function round(jogadaPlayer, jogadaComputer) {
  if (jogadaPlayer === jogadaComputer) {
    return "empate";
  }
  if (
    (jogadaPlayer == "pedra" && jogadaComputer == "tesoura") ||
    (jogadaPlayer == "papel" && jogadaComputer == "pedra") ||
    (jogadaPlayer == "tesoura" && jogadaComputer == "papel")
  ) {
    playerPoints++;
    playerCounter.innerHTML = playerPoints;
    if (playerPoints === 5) {
      console.log("vencedor");
    }
    return "player";
  }
  computerPoints++;
  computerCounter.innerHTML = computerPoints;
  if (computerPoints === 5) {
    console.log("vencedor");
  }
  return "computador";
}
