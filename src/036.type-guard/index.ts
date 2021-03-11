export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if('nome' in obj) console.log(obj.nome);
  if(obj instanceof Aluno) console.log(obj.nome);
}

mostraNome(new Aluno('João'))
