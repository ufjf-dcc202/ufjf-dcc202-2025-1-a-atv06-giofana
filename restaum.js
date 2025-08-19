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
}