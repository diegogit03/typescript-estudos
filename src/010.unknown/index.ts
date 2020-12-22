let x: unknown;
x = 100;
x = 'luiz';
x = 900;
x = 10;
const y = 800;

if(typeof x === 'number') console.log(x + y);

/*

  Definição bruta: any mais seguro

  docs:https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown

*/
