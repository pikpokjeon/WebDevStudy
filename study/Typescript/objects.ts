//tsc objects.ts && node objects.js

const profile = {
  //object
  name: 'yaejin',
  age: 27,
  coords: {
    //object
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
let def = 'setAge-> 2015syntax for defining a method inside insurgent object';

def = '  {age}  ->  destructuring out';
const { age, name }: { age: number; name: string } = profile;
console.log({ age, name });

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
console.log({ coords: { lat, lng } });
