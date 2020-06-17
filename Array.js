/**
1. Array.from() can be used to change two kinds of objects into a real array,
    one is array-like object, another is iterable object
 */
let array_like1 = {
  0: '0',
  1: '1',
  2: '2'
};
let array1 = Array.from(array_like1);
console.log(array1);  //[]
let array_like2 = {
  0: '.0',
  1: '.1',
  2: '.2',
  length: 3
};
array1 = Array.from(array_like2);
console.log(array1);  //[ '.0', '.1', '.2' ]
/**
    conclusion: any object owns the attribute of length can be change into array by Array.from()
 */

let array_like3 = {
  fjd: 'cmd',
  dh: 'ejs',
  template: 'html',
  css: 'Cascading Sheet Style',
  length: 4
};
console.log(Array.from(array_like3));  //[ undefined, undefined, undefined, undefined ]

array_like3 = {
  0: 'cmd',
  1: 'ejs',
  2: 'html',
  3: 'Cascading Sheet Style',
  length: 4
};
console.log(Array.from(array_like3)); //[ 'cmd', 'ejs', 'html', 'Cascading Sheet Style' ]

array_like3 = {
  1: 'cmd',
  3: 'ejs',
  6: 'html',
  2: 'Cascading Sheet Style',
  length: 4
};
console.log(Array.from(array_like3)); //[ undefined, 'cmd', 'Cascading Sheet Style', 'ejs' ]
/**
 * conclusion: the Array.from() will order the object's value by the value's key
 */

/**
 *extension: these thing is iterable
 *  String, Set, Map
 *  review: Set objects are collection of values, which should be occur once
 *          Map objects are collection of key-values
  */
console.log(Array.from('hello')); //[ 'h', 'e', 'l', 'l', 'o' ]
// console.log(...array_like1);  //error
// console.log([...array_like1]);  //error
let set1 = new Set(['a', 'b']);
console.log(set1);  //Set { 'a', 'b'}
console.log(Array.from(set1));  //[ 'a', 'b' ]
// let map1 = new Map(['a', 'b']); //error
let map1 = new Map([[1,'1'], ['a']]); //Map { 1 => '1', 'a' => undefined }
// map1.set([2, '2']); //Map { 1 => '1', 'a' => undefined, [ 2, '2' ] => undefined }
map1.set(2,'2');  //Map { 1 => '1', 'a' => undefined, 2 => '2' }
console.log(map1);
console.log(map1.get(2)); //2


/**
 * Array.from() can also accept the second parameter, which is a function (may be callback function),
 * to dispose every value of the first parameter and return it to the result
 */
let array2 = [1,2,3,4,5];
console.log(Array.from(array2, x => x - 1));  //[ 0, 1, 2, 3, 4 ]
//equals the map function
console.log(array2.map(function (item) {
  item--;
  return item
}));  //[ 0, 1, 2, 3, 4 ]
let array_like4 = {
  0: 'first',
  1: 'second',
  2: 'third',
  length: 3
};
console.log(Array.from(array_like4, x => x + 1)); //[ 'first1', 'second1', 'third1' ]

/**
 * specific
 */
console.log(Array.from({ length: 2 }, () => 'jack')); //[ 'jack', 'jack' ]
