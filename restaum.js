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