var quantidade = 5; //nesse caso melhor usar const quantidade = 5
var umFilme = 'Tubarão'; //nesse caso melhor usar const umFilme = 5
var oFilmeEhBom = true; //nesse caso melhor usar const oFilmeEhBom = 5
var nothingMuch = null; //nesse caso melhor usar const nothingMuch = 5
var nothingUndefined = undefined; //nesse caso melhor usar const nothingUndefined = 5
var now = new Date();
//Array
var colors = ['vermelho', 'verde', 'azul'];
var meuNumeros = [1, 3, 2];
var truths = [true, false, false];
// Object
var point = {
    x: 1,
    y: 2,
    z: 3,
    person1: 'thamyris'
};
//function
var exemploFunction = function (i) { };
// quando voce usa annotacion
//1) function que retornam type 'any'
var json = '{"x": 10, "y": 2}';
var cordenadas = JSON.parse(json); // retorna any
var cordenadasCorrigida = JSON.parse(json); // retorna type number
//2) quando declara a variavel em uma linha e chama depois
var palavrasDeCores = ['red', 'green', 'blue'];
var foundWord; // assim nao é a maneira certa, usar = false
for (var i = 0; i < palavrasDeCores.length; i += 1) {
    if (palavrasDeCores[i] === 'green') {
        foundWord = true;
    }
}
//3) quando a mesma variavel recebe 2 typos
var numerosGeral = [1 - 3, -9];
var numeroAbaixoDeZer = false;
for (var i = 0; i < numerosGeral.length; i += 1) {
    if (numerosGeral[i] > 0) {
        numeroAbaixoDeZer = numerosGeral[i];
    }
}
