var apples = 5;
var speed = '10';
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
//built in objexts
var now = new Date();
//object literal annotations
//Array
var colors = ['red', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
//Classes Capital
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//Objext literal
var point = {
    x: 10,
    y: 20
};
//function
var logNum = function (i) {
    console.log(i);
};
//  when to use annotations
// 1) Function that returns the 'any' type
var json = '{"x" :10, "y" : 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
//2)when we declare a variable on one line
//and initializate it later
var words = ['r', 'd', 'b'];
var foundword;
for (var i = 0; i < words.length; i++) {
    console.log(words[i]);
    if (words[i] === 'b') {
        foundword = true;
        console.log(foundword);
    }
}
//3)variable whose type cannot be inferred correctly
var numbers = [-2, -34, 2, 53];
var numberAboveZero = false; //    |  = or
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
        console.log(numberAboveZero);
    }
}
