type FilterCallback<T> = (
  value: T,
  index?: number,
  array?: T[]
) => boolean;

function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>) {
  const novoArray = [];


  for(let i = 0; i < array.length; i++) {
    if(callbackfn(array[i])) novoArray.push(array[i]);
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter(value => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = meuFilter(array, value => value < 5);
console.log(arrayFiltradoOriginal);
