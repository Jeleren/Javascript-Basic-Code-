const fn = Symbol('fn');
const obj = { fn: 2};
obj[fn] = 1;
console.log(obj) // { fn: 2, [Symbol(fn)]: 1 }