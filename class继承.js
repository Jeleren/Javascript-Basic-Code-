class Father{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
}
// console.log(Father.prototype)
// let f1 = new Father('jeleren', 22)
// console.log('name:',f1.getName())
// console.log(f1.__proto__ === Father.prototype)
// console.log('name:',f1.name)

class Kid extends Father{
    constructor(fNamem, fAge, kName){
        super(fNamem, fAge); // 子类必须调用super方法 只有在调用super方法后 才能使用this关键字 因为ES6的继承机制是通过super方法先将父类实例对象的属性方法添加到this上
        this.kName = kName;                                                                 // ES5 是先生成this 再将父类的属性方法通过apply 或者 call 添加到this上
        //this.name = kName; // 这个和父类的属性冲突 在k1.getFName()调用时 会先查找本类this 再会到父类中 寻找属性 所以属性名不能冲突
        console.log(super.getName()) // jeleren super也可以当做对象，指向父类原型对象
        console.log(super.name) // undefined 不能调用父类的属性
    }
    getFName(){
        return `father's name:${super.getName()}`;
    }
}

let k1 = new Kid('jeleren', 22, 'jel')
console.log(k1.getFName())

function Person(n){
    this.fName = 'jeleren';
    this.getFName = function(){
        return this.fName
    }
}
// Person.prototype.getFName = function(){
//     return this.name;
// }
function P(n){
    this.name = n;
}
P.prototype = new Person()
let p = new P('jel')
console.log(p.name)
console.log(p.getFName())

// 单继承 组合寄生式
// Shape - 父类(superclass)
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // 父类的方法
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  
  // Rectangle - 子类(subclass)
  function Rectangle() {
    Shape.call(this); // call super constructor.
  }
  
  // 子类续承父类
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();
  
  console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
  console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
  rect.move(1, 1); // Outputs, 'Shape moved.'

  let a = require('./类型判别.js')
  console.log(a)