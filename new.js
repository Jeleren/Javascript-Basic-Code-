// 本脚本模拟js new关键字执行的过程

function objectFactory(fn, ...args) {
// 1. new 创建一个新空对象 继承构造函数原型上的属性
    var obj = Object.create(fn.prototype)

// 3. 改变this指向 （执行构造函数，获得构造函数内的属性和方法，返回相应的对象）
    var ret = fn.apply(obj, args)
// 4. 返回结果
    return typeof ret === 'object' ? ret : obj;
};

function F(name){
    this.name = name;
}
F.prototype.sayName = function(){
    console.log(this.name)
}

let f = objectFactory(F, 'jeleren')
console.log(f)
