//tsc objects.ts && node objects.js
var profile = {
    //object
    name: 'yaejin',
    age: 27,
    coords: {
        //object
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
var def = 'setAge-> 2015syntax for defining a method inside insurgent object';
def = '  {age}  ->  destructuring out';
var age = profile.age, name = profile.name;
console.log({ age: age, name: name });
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log({ coords: { lat: lat, lng: lng } });
