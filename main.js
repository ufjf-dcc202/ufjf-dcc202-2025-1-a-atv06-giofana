const eApp = document.querySelector("#app");

function criaTabuleiro() {
  const eTabuleiro = document.createElement("div");
  eTabuleiro.classList.add("tabuleiro");
  return eTabuleiro;
}

const eTabuleiro = criaTabuleiro();
eApp.append(eTabuleiro);