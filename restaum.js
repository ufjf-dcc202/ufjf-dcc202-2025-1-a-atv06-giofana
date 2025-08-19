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

export function seleciona(l,c){
  if(tabuleiro[l][c] === 1){
    selecionado = { l, c };
  } else {
    selecionado = null;
  }
}

export function getSelecionado(){ 
    return selecionado; 
}

export function tentaMover(destL, destC){
    if (selecionado === null) return false;
    const { l, c } = selecionado;

    if (l === destL && Math.abs(c - destC) === 2) {
        const meio = (c + destC) / 2;
        if (tabuleiro[l][meio] === 1 && tabuleiro[destL][destC] === 0) {
            tabuleiro[l][c] = 0;
            tabuleiro[l][meio] = 0;
            tabuleiro[destL][destC] = 1;
            selecionado = null;
            return true;
        }
    }
    if (c === destC && Math.abs(l - destL) === 2) {
        const meio = (l + destL) / 2;
        if (tabuleiro[meio][c] === 1 && tabuleiro[destL][destC] === 0) {
            tabuleiro[l][c] = 0;
            tabuleiro[meio][c] = 0;
            tabuleiro[destL][destC] = 1;
            selecionado = null;
            return true;
        }
    }
    return false;
}