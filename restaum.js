let tabuleiro = [
  [-1,-1,1,1,1,-1,-1],
  [-1,-1,1,1,1,-1,-1],
  [ 1, 1,1,1,1, 1, 1],
  [ 1, 1,1,0,1, 1, 1],
  [ 1, 1,1,1,1, 1, 1],
  [-1,-1,1,1,1,-1,-1],
  [-1,-1,1,1,1,-1,-1],
];

export function getTabuleiro() {
  return tabuleiro.map(linha => [...linha]);
}

let selecionado = null;

export function seleciona(l, c) {
  if (l == null || c == null) {
    selecionado = null;
    return;
  }
  if (tabuleiro[l][c] === 1) {
    if (selecionado && selecionado.l === l && selecionado.c === c) {
      selecionado = null;
    } else {
      selecionado = { l, c };
    }
  } else {
    selecionado = null;
  }
}

export function getSelecionado() {
  return selecionado ? { ...selecionado } : null;
}

export function tentaMover(destL, destC) {
  if (selecionado === null) return false;
  if (tabuleiro[destL][destC] !== 0) return false;

  const { l, c } = selecionado;

  if (l === destL && Math.abs(c - destC) === 2) {
    const meioC = (c + destC) / 2;
    if (tabuleiro[l][meioC] === 1) {
      tabuleiro[l][c] = 0;
      tabuleiro[l][meioC] = 0;
      tabuleiro[destL][destC] = 1;
      selecionado = null;
      return true;
    }
  }

  if (c === destC && Math.abs(l - destL) === 2) {
    const meioL = (l + destL) / 2;
    if (tabuleiro[meioL][c] === 1) {
      tabuleiro[l][c] = 0;
      tabuleiro[meioL][c] = 0;
      tabuleiro[destL][destC] = 1;
      selecionado = null;
      return true;
    }
  }

  return false;
}

export function temMovimentos() {
  for (let l = 0; l < 7; l++) {
    for (let c = 0; c < 7; c++) {
      if (tabuleiro[l][c] === 1) {
        if (l > 1 && tabuleiro[l-1][c] === 1 && tabuleiro[l-2][c] === 0) return true;
        if (l < 5 && tabuleiro[l+1][c] === 1 && tabuleiro[l+2][c] === 0) return true;
        if (c > 1 && tabuleiro[l][c-1] === 1 && tabuleiro[l][c-2] === 0) return true;
        if (c < 5 && tabuleiro[l][c+1] === 1 && tabuleiro[l][c+2] === 0) return true;
      }
    }
  }
  return false;
}

export function reinicia() {
  tabuleiro = [
    [-1,-1,1,1,1,-1,-1],
    [-1,-1,1,1,1,-1,-1],
    [ 1, 1,1,1,1, 1, 1],
    [ 1, 1,1,0,1, 1, 1],
    [ 1, 1,1,1,1, 1, 1],
    [-1,-1,1,1,1,-1,-1],
    [-1,-1,1,1,1,-1,-1],
  ];
  selecionado = null;
}
