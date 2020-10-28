/*

  Abaixo esta sendo feita uma "type annotation", neste caso
  ocorrera uma inferencia de tipos, assim fazendo com que
  o ": string" seja inutil

  sobre type annotation: https://www.tutorialsteacher.com/typescript/type-annotation
  sobre inferencia de tipo: https://www.typescriptlang.org/docs/handbook/type-inference.html

*/
let nome: string = 'Luiz';

/*

  Tipos basicos abaixo:

  Docs: https://www.typescriptlang.org/docs/handbook/basic-types.html

*/

let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol: https://www.typescriptlang.org/docs/handbook/symbols.html
// let big: bigint = 10n; // bigint: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint

/*

  arrays

  docs: https://www.typescriptlang.org/docs/handbook/basic-types.html#array

*/

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: Number[] = [1, 2, 3];

let arrayDeStrings: Array<String> = ['a', 'b', 'c'];
let arrayDeStrings2: String[] = ['a', 'b', 'c'];

/*

  Objetos

*/

let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Diego Henrique de Oliveira Madero',
  idade: 13
};

console.log(pessoa.nome);

/*

  Funções

  docs: https://www.typescriptlang.org/docs/handbook/functions.html

*/

function soma(x: number, y:number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
