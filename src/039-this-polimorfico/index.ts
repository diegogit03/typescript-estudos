export class Calculadora {
  constructor(
    public numero: number
  ) {}

  public add(n: number): this {
    this.numero += n;
    return this;
  }

  public sub(n: number): this {
    this.numero -= n;
    return this;
  }

  public mult(n: number): this {
    this.numero *= n;
    return this;
  }

  public div(n: number): this {
    this.numero /= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new Calculadora(10);

calculadora.add(2).mult(2);
console.log(calculadora);

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  public setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  public setUrl(url: string): this {
    this.url = url;
    return this;
  }

  public send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request
  .setUrl('http://www.google.com')
  .setMethod('get')
  .send();
