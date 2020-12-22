enum Cores {
    VERMELHO = 10, // 0
    AZUL = 100, // 1
    AMARELO = 1000, // 2
    ROXO = 'ROXO',
    // VERDE,
    VERDE = 1010
}

console.log(Cores.VERMELHO);
// console.log(Cores[0]); erro sem aviso no editor
console.log(Cores.ROXO);

enum Cores {
    ROSA,
    LARANJA
}

console.log(Cores);

function escolhaCor(cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaCor(123141); // retornará undefined sem aviso previo do editor
