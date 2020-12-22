type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number }
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const pessoa: Pessoa = {
  nome: 'Diego',
  sobrenome: 'Madero',
  idade: 13
}

console.log(pessoa);

// Ativando module mode
export { pessoa };
