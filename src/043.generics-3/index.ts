interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T,
  idade: U
}

export const aluno: PessoaProtocolo = {
  nome: 'Diego',
  sobrenome: 'Henrique de Oliveira Madero',
  idade: 14
}

export const aluno2: PessoaProtocolo<number, string> = {
  nome: 123,
  sobrenome: 123,
  idade: '45'
}

console.log(aluno, aluno2);
