let obj = {
    name: 'jeleren'
}

function printName(){
    console.log(this.name)
}

// Function.prototype.bind = function(thisArg) { // 自定义bind thisArg指向当前的对象
//     let arg = Array.prototype.slice.call(arguments, 1) // 将传入的参数转化为数组
//     let self = this
//     return function() {  // 这里可能传参
//         let innerArg = Array.prototype.slice.call(arguments)
//         self.apply(thisArg, arg.concat(innerArg))
//     }
// }

// printName.bind(obj)()

// let pn = new printName.bind(obj)
// console.log(pn)
//console.log(pn()) // self.apply is not a function


// 实现bind返回的函数能充当构造函数
Function.prototype.bind = function (that) {
    let thisArg = that,
    args = Array.prototype.slice.call(arguments)
    // console.log(thisArg, args)
    var self = this
    // new优先级
    var fbound = function (...arg) {
        self.apply(this instanceof self ? this : thisArg, [...args, ...arg])
    }
    // 继承原型上的属性和方法
    fbound.prototype = Object.create(self.prototype);

    return fbound;
}
function Animal(a) {
    this.a = a
}

const o1 = {}

// 普通调用
var a1 = Animal.bind(o1)
a1(2)
console.log(o1.a) // 2

// 作为构造函数调用
var a2 = new (Animal.bind(o1))(5);
console.log(a2) // Animal {a: 5}    
a2.__proto__.constructor === Animal  // true
console.log(a2.a) // 5