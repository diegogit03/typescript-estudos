export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador):void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  // getNome(): string {
  //   return this.nome;
  // }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Diego', 'Henrique');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1.nome);
// console.log(empresa1.colaboradores);
