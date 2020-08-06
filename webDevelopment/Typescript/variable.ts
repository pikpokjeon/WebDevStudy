//tsc variable.ts && node variable.js

let apples: number = 5;
let speed: string = '10';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objexts
let now: Date = new Date();

//object literal annotations

//Array

let colors: string[] = ['red', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes Capital
class Car {}
let cdar: Car = new Car();

//Objext literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNum: (i: number) => void = (i: number) => {
  console.log(i);
};

//  when to use annotations
// 1) Function that returns the 'any' type
const json = '{"x" :10, "y" : 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2)when we declare a variable on one line
//and initializate it later
let words = ['r', 'd', 'b'];
let foundword: boolean;

for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
  if (words[i] === 'b') {
    foundword = true;
    console.log(foundword);
  }
}

//3)variable whose type cannot be inferred correctly
let numbers = [-2, -34, 2, 53];
let numberAboveZero: boolean | number = false; //    |  = or
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
    console.log(numberAboveZero);
  }
}
