let arr = [],
obj = {},
a = 1,
b = '1',
c = true,
d = null,
e = undefined,
f = function () {}
console.log('arr:',typeof(arr), '|' , 'obj', typeof obj, '|', 'a', typeof(a), '|', 'b' ,typeof(b), '|','c' ,typeof(c), '|','d' ,typeof(d), '|','e' ,typeof(e), '|','f' ,typeof(f))
console.log(arr instanceof Array) // true
console.log(arr instanceof Object) // true
// console.log(d instanceof null) // TypeError null 不是一个对象
console.log(f instanceof Function) // true
console.log(f instanceof Object) // true
console.log(e instanceof Object) // false

console.log(Object.prototype.toString.call(b))



module.exports.a = 1
module.exports= {}

exports.a = '2'
exports.b = 2
exports = {}

// console.log(module)