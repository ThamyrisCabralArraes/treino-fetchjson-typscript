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

//2) quando declara a variavel em uma linha e chama depois

let palavrasDeCores = ['red', 'green', 'blue'];
let foundWord; // assim nao é a maneira certa, usar = false

for (let i = 0; i < palavrasDeCores.length; i += 1) {
  if (palavrasDeCores[i] === 'green') {
    foundWord = true;
  }
}

//3) quando a mesma variavel recebe 2 typos
let numerosGeral = [1 - 3, -9];
let numeroAbaixoDeZer: boolean | number = false;

for (let i = 0; i < numerosGeral.length; i += 1) {
  if (numerosGeral[i] > 0) {
    numeroAbaixoDeZer = numerosGeral[i];
  }
}
