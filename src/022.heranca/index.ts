export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {

  }

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.nome;
  }

  public getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  public getNomeCompleto(): string {
    return 'Aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Diego', 'Henrique', 30, '000.000.000-00');
const aluno = new Aluno('Diego', 'Henrique', 30, '000.000.000-00');
const cliente = new Cliente('Diego', 'Henrique', 30, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
