function randomNumber() {
  let jogada = Math.floor(Math.random() * 3);
  if (jogada == 0) {
    return "Pedra";
  } else if (jogada == 1) {
    return "Papel";
  } else {
    return "Tesoura";
  }
}

function round(jogadaPlayer, jogadaComputador) {
  if (jogadaPlayer === jogadaComputador) {
    return "Empate";
  } else if (
    (jogadaPlayer === "Pedra" && jogadaComputador === "Tesoura") ||
    (jogadaPlayer === "Papel" && jogadaComputador === "Pedra") ||
    (jogadaPlayer === "Tesoura" && jogadaComputador === "Papel")
  ) {
    return "Você ganhou!!!";
  } else {
    return "Você perdeu!!!";
  }
}

const jogadaComputador = randomNumber();
console.log(jogadaComputador);
console.log(round("Tesoura", jogadaComputador));

function game() {
  for (let i = 0; i <= 5; i++) {}
}
