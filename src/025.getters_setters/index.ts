export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string
  ) {}

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf;
  }
}

const pessoa = new Pessoa('Diego', 'Henrique', 30, '000.000.000-00');
console.log(pessoa.cpf);
pessoa.cpf = '000.000.000-99';
console.log(pessoa.cpf);
