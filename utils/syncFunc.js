
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



const asyncFunc = n => async m => new Promise( res => 
    setTimeout(() => 
res( console.log(n) ) , m ));


const promiseArry = (x,y)=> async asyncFunc => [await asyncFunc(x)(y),await  asyncFunc(x-5)(y-5000),await   asyncFunc(x-7)(y-7000),await   asyncFunc(x-9)(y-9000),  ]
// const promiseArry = (x,y)=> [ asyncFunc(x)(y),  asyncFunc(x-3)(y-3000),   asyncFunc(x-2)(y-2000),   asyncFunc(x-1)(y-1000),  ]
// const promiseArry = [ asyncFunc(5)(5000),  asyncFunc(3)(3000),   asyncFunc(2)(2000),   asyncFunc(1)(1000),  ]


promiseArry(10,10000)(asyncFunc)
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