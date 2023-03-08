//o number da funçao nao precisa ser descrito nesse caso mas sempre deve ser colocado
// se vc nao colocar e esquecer o retorno ela fca void
var add = function (x, y) {
    return x + y;
};
// outros tipos de funcao sem ser arrow
function divide(a, b) {
    return a / b;
}
var multiplicacao = function (a, b) {
    return a * b;
};
// void
var voids = function (message) {
    message;
};
// never - dificil usar mas tem essa opcao, melhor usar void
var throwErr = function (message) {
    throw new Error(message);
};
// funcao usando destruturão
var weatherToday = {
    date: new Date(),
    weather: 'sunny'
};
// aqui sem destructuring
var showWeather = function (weathers) {
    weathers.date;
    weathers.weather;
};
showWeather(weatherToday);
// aqui com destructuring
var showWeatherComDestruturacao = function (_a) {
    var date = _a.date, weather = _a.weather;
    date;
    weather;
};
showWeatherComDestruturacao(weatherToday);
