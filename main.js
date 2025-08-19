import { getTabuleiro, seleciona, getSelecionado, tentaMover, temMovimentos, reinicia } from "./restaum.js";

const eApp = document.querySelector("#app");

function criaTabuleiro() {
  const eTabuleiro = document.createElement("div");
  eTabuleiro.classList.add("tabuleiro");
  return eTabuleiro;
}

const eTabuleiro = criaTabuleiro();
eApp.append(eTabuleiro);

function criaCasa(tipo, l, c) {
  const eCasa = document.createElement("div");
  eCasa.classList.add("casa");
  eCasa.dataset.linha = l;
  eCasa.dataset.coluna = c;

  if (tipo === 1) eCasa.classList.add("pino");
  if (tipo === 0) eCasa.classList.add("vazio");

  eCasa.addEventListener("click", cliqueCasa);
  return eCasa;
}

function atualizaTabuleiro() {
  eTabuleiro.innerHTML = "";
  const tab = getTabuleiro();
  const sel = getSelecionado();

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      const valor = tab[i][j];
      if (valor === -1) {
        const placeholder = document.createElement("div");
        eTabuleiro.append(placeholder);
      } else {
        const eCasa = criaCasa(valor, i, j);
        if (sel && sel.l === i && sel.c === j) {
          eCasa.style.outline = "2px solid red";
        }
        eTabuleiro.append(eCasa);
      }
    }
  }
}

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

  if (!temMovimentos()) {
    setTimeout(() => alert("Fim de jogo!"), 100);
  }
}

document.querySelector("#reiniciar").addEventListener("click", () => {
  reinicia();
  atualizaTabuleiro();
});

atualizaTabuleiro();
