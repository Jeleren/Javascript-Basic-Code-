var s1 = new String('s')
var s2 = new String('s')
console.log(s1 == s2)
console.log(s1 === s2)
let a = '1 2 3'
a = a.split(' ')
console.log(a instanceof Array)
console.log([...a].map(Number))

// a.splice(0, 0, 0)
// console.log(a)