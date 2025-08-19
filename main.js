const eApp = document.querySelector("#app");

function criaTabuleiro() {
  const eTabuleiro = document.createElement("div");
  eTabuleiro.classList.add("tabuleiro");
  return eTabuleiro;
}

const eTabuleiro = criaTabuleiro();
eApp.append(eTabuleiro);

function criaCasa(tipo) {
  const eCasa = document.createElement("div");
  eCasa.classList.add("casa");
  if (tipo === 1) eCasa.classList.add("pino");
  if (tipo === 0) eCasa.classList.add("vazio");
  return eCasa;
}

eTabuleiro.append(criaCasa(1));
