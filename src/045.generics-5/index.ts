export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U
  ) {}
}

const pessoa1 = new Pessoa('Diego', 14);
const pessoa2 = new Pessoa(['Diego'], 14);
const pessoa3 = new Pessoa(['Diego'], { idade: 14 });
const pessoa4 = new Pessoa<string, number>('Diego', 14);
