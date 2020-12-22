let x;
if(typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(firstName: string, lastName?: string): {
    firstName: string,
    lastName?: string
} {
    return {
        firstName,
        lastName
    }
}

export function squareOf(x: any) {
    // Evitar o bloco abaixo
    if(typeof x === 'number') return x *x;
    return null;
}

// Pode retornar numero ou null
const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if(squareOfTwoNumber === null) {
    // O bloco abaixo daria um erro poís é possivel que o valor seja null
    // console.log('Conta invalida', squareOfTwoNumber * 2);
    console.log('Conta invalida');
} else {
    console.log(squareOfTwoNumber * 100);
}
