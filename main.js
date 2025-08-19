import { getTabuleiro, seleciona, getSelecionado, tentaMover } from "./restaum.js";
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
  eCasa.dataset.linha = l;
  eCasa.dataset.coluna = c;
  if (tipo === 1) eCasa.classList.add("pino");
  if (tipo === 0) eCasa.classList.add("vazio");
  eCasa.addEventListener("click", cliqueCasa);
  return eCasa;
}

eTabuleiro.append(criaCasa(1));

const inicial = [
  [-1,-1,1,1,1,-1,-1],
  [-1,-1,1,1,1,-1,-1],
  [ 1, 1,1,1,1, 1, 1],
  [ 1, 1,1,0,1, 1, 1],
  [ 1, 1,1,1,1, 1, 1],
  [-1,-1,1,1,1,-1,-1],
  [-1,-1,1,1,1,-1,-1],
];

function atualizaTabuleiro() {
  eTabuleiro.innerHTML = "";
  const tab = getTabuleiro();
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      const valor = tab[i][j];
      if (valor === -1) {
        const vazio = document.createElement("div");
        eTabuleiro.append(vazio);
      } else {
        eTabuleiro.append(criaCasa(valor, i, j));
      }
    }
  }
}
atualizaTabuleiro();

function cliqueCasa(ev) {
  const l = Number(ev.currentTarget.dataset.linha);
  const c = Number(ev.currentTarget.dataset.coluna);

  const sel = getSelecionado();
  if (sel) {
    if (!tentaMover(l, c)) {
      seleciona(l, c); 
    }
  } else {
    seleciona(l, c);
  }

  atualizaTabuleiro();
}
