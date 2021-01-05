export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string,) {}

    get nome(): string {
        return this._nome;
    }

    get ferramenta(): Ferramenta | null {
        return this._ferramenta;
    }

    set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta;
    }

    public escrever(): void {
        if(this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta...');
            return;
        }
        this.ferramenta.escrever();
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}
    public abstract escrever(): void;

    get nome(): string {
        return this._nome;
    }
}

export class Caneta extends Ferramenta {
    public escrever(): void {
        console.log(`${this.nome} - Está escrevendo...`);
    }
}

export class MaquinaEscrever extends Ferramenta {
    public escrever(): void {
        console.log(`${this.nome} - Está digitando...`);
    }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('bic');
const maquinaEscrever = new MaquinaEscrever('Maquina');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);

escritor.ferramenta = maquinaEscrever;
escritor.escrever();

