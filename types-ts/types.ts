const quantidade: number = 5; //nesse caso melhor usar const quantidade = 5
const umFilme: string = 'Tubarão'; //nesse caso melhor usar const umFilme = 5
const oFilmeEhBom: boolean = true; //nesse caso melhor usar const oFilmeEhBom = 5

const nothingMuch: null = null; //nesse caso melhor usar const nothingMuch = 5
const nothingUndefined: undefined = undefined; //nesse caso melhor usar const nothingUndefined = 5

const now: Date = new Date();

//Array
const colors: string[] = ['vermelho', 'verde', 'azul'];

const meuNumeros: number[] = [1, 3, 2];

const truths: boolean[] = [true, false, false];

// Object
const point: {
  x: number;
  y: number;
  z: number;
  person1: string;
  person2?: string;
} = {
  x: 1,
  y: 2,
  z: 3,
  person1: 'thamyris',
};

//function
const exemploFunction: (i: number) => void = (i) => {};

// quando voce usa annotacion
//1) function que retornam type 'any'
const json = '{"x": 10, "y": 2}';
const cordenadas = JSON.parse(json); // retorna any
const cordenadasCorrigida: { x: number; y: number } = JSON.parse(json); // retorna type number
console.log(cordenadasCorrigida);
