let x = 10; // Tipo literal
x = 0b1010;
// x = 'Diego';
const y = 10; // Tipo literal
let a: 100; // Tipo literal
// a = 120;
let b = 110 as const;
// b = 120;

const pessoa = {
  nome: 'Diego' as const,
  sobrenome: 'Henrique de Oliveira Madero'
}

// Alternativa ao enum
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Amarelo'));

// Ativa module mode
export default 1;
