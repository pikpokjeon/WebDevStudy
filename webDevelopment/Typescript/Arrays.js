var build = 'tsc Arrays.ts && node Arrays.js';
var carMakers = ['ford', 'toyota', 'kia'];
var dates = [new Date(), new Date()];
var carsByMake = [['dfds'], ['lala'], ['meow']];
var meowMake = [];
var TypedArrays = 'Arrays where each element is some consistent type of value';
TypedArrays = 'help with inference when extacting values';
var car = carMakers[0];
console.log('car :' + car);
var myCar = carMakers.pop(); //배열의 마지막요소를 제거하고 반환한다
console.log('myCar :' + myCar);
TypedArrays = 'prevent us from adding incompatible values to the array';
// carMakers.push(100); //다른 방법을 쓰면 할 수 있음
console.log('carMakers :' + carMakers);
TypedArrays = 'we can get help with "map", "forEach", "reduce" fuctions';
carMakers.map(function (car) {
    return car.toUpperCase();
});
console.log('carMakers.map :' + carMakers.map);
console.log('car' + car);
console.log('uppercase:' + car.toUpperCase());
console.log('carMakers :' + carMakers);
TypedArrays = 'flexible - arrays can still contain multiple different types';
var importantDates = []; // new Date() -> object
importantDates.push('2020-02-02');
importantDates.push(new Date());
console.log(importantDates);
var fuck = ['dsf', 'sd3fs', 'dfsf3ds', '33vvd4', '64f', '43df'];
console.log('fuck :' + fuck);
var plus = [''];
console.log('plus :' + plus);
fuck.map(function (you) {
    var plus = [];
    for (var i = 0; i < fuck.length; i++) {
        plus[i] = fuck[i];
        console.log(i + ' 번째');
        console.log('plus:' + plus);
    }
    console.log(fuck);
    console.log(plus);
    if (fuck === plus) {
        console.log('meow');
    }
    return you.substr(2, 4);
});
console.log('fuck :' + fuck);
console.log('plus:' + plus);
