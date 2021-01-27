// type Pessoa = {
//   nome: string,
// };

interface Pessoa {
  nome: string
}

interface Pessoa {
  sobrenome: string
}

interface Pessoa {
  readonly enderecos: readonly string[]
}

const pessoa: Pessoa = {
  nome: 'Diego',
  sobrenome: 'Henrique de Oliveira Madero',
  enderecos: [
    'Av. Brasil',
    'Vila ouro verde'
  ]
};
