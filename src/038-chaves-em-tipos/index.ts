type veiculo = {
  marca: string
  ano: string
}

type Car = {
  brand: veiculo['marca']
  year: veiculo['ano']
  name: string
}

const carro: Car = {
  brand: 'Ford',
  year: '2020',
  name: 'Nome'
}

console.log(carro);
