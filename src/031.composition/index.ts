export class Carro {
  private readonly motor: Motor = new Motor();

  public ligar(): void {
    this.motor.ligar();
  }

  public acelerar(): void {
    this.motor.acelerar();
  }

  public parar(): void {
    this.motor.parar();
  }

  public desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  public ligar(): void {
    console.log('Motor está ligado...');
  }

  public acelerar(): void {
    console.log('Motor está acelerando...');
  }

  public parar(): void {
    console.log('Motor está parado...');
  }

  public desligar(): void {
    console.log('Motor está desligado...');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
