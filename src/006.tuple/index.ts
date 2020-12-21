const dadosCliente1: readonly [number, string] = [1, 'Diego'];
const dadosCliente2: [number, string, string] = [1, 'Diego', 'Henrique'];
const dadosCliente3: [number, string, string?] = [1, 'Diego'];
const dadosCliente4: [number, ...string[]] = [1, 'Diego', 'Henrique', 'De', 'Oliveira', 'Madero'];

dadosCliente2[0] = 1;
dadosCliente2[1] = 'Diego Henrique';

// dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly
const array: readonly string[] = ['Diego', 'Henrique', 'de', 'Oliveira', 'Madero'];
const array2: ReadonlyArray<string> = ['Diego', 'Henrique', 'de', 'Oliveira', 'Madero'];

console.log(array);
console.log(array2);
