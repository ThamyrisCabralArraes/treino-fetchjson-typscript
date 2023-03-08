//o number da funçao nao precisa ser descrito nesse caso mas sempre deve ser colocado
// se vc nao colocar e esquecer o retorno ela fca void
const add = (x: number, y: number): number => {
  return x + y;
};

// outros tipos de funcao sem ser arrow
function divide(a: number, b: number): number {
  return a / b;
}

const multiplicacao = function (a: number, b: number): number {
  return a * b;
};

// void

const voids = (message): void => {
  message;
};

// never - dificil usar mas tem essa opcao, melhor usar void

const throwErr = (message: string): never => {
  throw new Error(message);
};

// funcao usando destruturão

const weatherToday = {
  date: new Date(),
  weather: 'sunny',
};
// aqui sem destructuring
const showWeather = (weathers: { date: Date; weather: string }): void => {
  weathers.date;
  weathers.weather;
};

showWeather(weatherToday);

// aqui com destructuring

const showWeatherComDestruturacao = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  date;
  weather;
};

showWeatherComDestruturacao(weatherToday);
