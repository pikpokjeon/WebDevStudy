// const asyncFunc = n => m =>
// {
//     let time
//     setTimeout(() => {time = n; console.log(time)}, m)
// }

// const aa = n => m => async func => new Promise( res => res(func(n)(m)) );

// const aa = n => m => async func => new Promise( res => res(func(n)(m)) );


// const f =  (x) => (y) => {
// const arry = async(x,y) => [ await a(x)(y),await a(3)(y-2000),await a(4)(y-1000)]
// const arry = async(x,y,aa,asyncFunc) => Promise.all([ aa(x)(y)(asyncFunc),  aa(x-2)(y-2000)(asyncFunc),  aa(x-4)(y-4000)(asyncFunc)]) // return 1
// await arry.forEach(e => e);
// }



const asyncFunc = n => async m => new Promise(res => {
  console.log(n,m,'started');
    return setTimeout(() => res(n), m)
});

function log(value) {
  console.log(`Finished ${value}`);
  return value;
}
const promiseArry = (x, y) => async asyncFunc =>{
  const [a,b,c,d] = [await asyncFunc(x)(y), await asyncFunc(x - 3)(y - 3000), await asyncFunc(x - 4)(y - 4000), await asyncFunc(x - 5)(y - 5000), ]
  log(a)
}
// const promiseArry = (x,y)=> [ asyncFunc(x)(y),  asyncFunc(x-3)(y-3000),   asyncFunc(x-2)(y-2000),   asyncFunc(x-1)(y-1000),  ]
// const promiseArry = [ asyncFunc(5)(5000),  asyncFunc(3)(3000),   asyncFunc(2)(2000),   asyncFunc(1)(1000),  ]


promiseArry(5, 5000)(asyncFunc)
// const promiseArry = (x,y,aa,asyncFunc) => Promise.all([ aa(x)(y)(asyncFunc),  aa(x-2)(y-2000)(asyncFunc),  aa(x-4)(y-4000)(asyncFunc)]) // return 1

//  a(aa)(asyncFunc)
//  aa(3)(3000)(asyncFunc)
//  arry(5,5000,aa,asyncFunc)
// console.log(asyncFunc(3)(3000))
// arry(1,1000)
// const arry = x => y => a(x)(y) 
// arry.filter( e =>)

// arry.map( e => (x) => (y) => { e(1)(1000)})
// (async () => {
//   const promiseArry2 = [asyncFunc(5, 5000), asyncFunc(7,7000), asyncFunc(9, 9000)]
//   await promiseArry2.reduce(async (prev, next) => {
//     await prev()
//     const result = await next()
//   }, Promise.resolve())
// })()


// a(1000)



// const promiseFunc = (n, delay) =>
//   new Promise((r) => {
//     console.log(`Started ${n}. Will finish after ${delay}ms`);
//     return setTimeout(() => r(n), delay);
//   });

// function logAndReturn(value) {
//   console.log(`Finished ${value}`);
//   return value;
// }

const arry = async (delay) => [
  await promiseFunc(0, delay).then(logAndReturn),
  await promiseFunc(1, delay - 2000).then(logAndReturn),
  await promiseFunc(2, delay - 4000).then(logAndReturn)
];
//  const a = Promise.all([await fetchSomething(), await fetchSomething(), await fetchSomething()] // return 1

// function* main2 (arr) => {
//   for (const element of arr) {
//     yield element
//   }
//   yield promiseFunc()
// } 

// async function main() {
//   const test = [
//     [1, 5000],
//     [2, 2000],
//     [3, 1000]
//   ]

//   let a = await promiseFunc(test[0][0], test[0][1])
//   logAndReturn(a)
//   let b = await promiseFunc(test[1][0], test[1][1])
//   logAndReturn(b)
//   let c = await promiseFunc(test[2][0], test[2][1])
//   logAndReturn(c)
//   // console.log("Starting");
//   // const result = await arry(5000);
//   // console.log(`result: ${result}`);
// }

// main();