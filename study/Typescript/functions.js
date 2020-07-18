//tsc functions.ts && node functions.js
// () : type = return type을 적음 안적어두 알아냄
var add = function (a, b) {
    return a + b;
};
function divide(a, b) {
    return a / b;
}
var multi = function (a, b) {
    return a * b;
};
//void     = function not going to return!!!
var type_Void = 'return을 하지 않는 함수!! 반환 타입';
var logger = function (message) {
    console.log(message);
    return undefined;
};
var type_Never = '반환값이 절대 없을 때 쓰는 반환타입!';
var throwError = function (message) {
    throw new Error(message);
};
var throwError2 = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
var todayWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (weather) {
    console.log(weather.date);
    console.log(weather.weather);
};
logWeather(todayWeather);
