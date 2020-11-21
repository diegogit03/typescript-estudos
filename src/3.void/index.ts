function noReturn(...args: string[]): void {
  console.log('this funcion not return!');
}

const person = {
  name: 'Diego',
  surname: 'Henrique',

  showName(): void {
    console.log(this.name + ' ' + this.surname);
  }
};

noReturn('Diego', 'Henrique');
person.showName();

export { person };
