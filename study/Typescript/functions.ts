//tsc functions.ts && node functions.js

// () : type = return type을 적음 안적어두 알아냄
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multi = function (a: number, b: number): number {
  return a * b;
};

//void     = function not going to return!!!
const type_Void = 'return을 하지 않는 함수!! 반환 타입';

const logger = (message: string): void => {
  console.log(message);
  return undefined;
};

const type_Never = '반환값이 절대 없을 때 쓰는 반환타입!';
const throwError = (message: string): never => {
  throw new Error(message);
};
const throwError2 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = (weather: { date: Date; weather: string }) => {
  console.log(weather.date);
  console.log(weather.weather);
};
logWeather(todayWeather);
