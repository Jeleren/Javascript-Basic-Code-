function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHi = ()=> {console.log('hi')}
}
Person.prototype.gender = 'male'

var p = new Person('jeleren', 22)
console.log(p.gender)
console.log(p.__proto__) // Person {gender: 'male' }  说明构造函数内部属性和方法都不在原型对象上，new 的对象直接继承了内部属性和方法
console.log(p.__proto__ === Person.prototype) // true
console.log(Person.__proto__ == Function.prototype) // true
console.log(Person.prototype.__proto__ == Object.prototype) // true
console.log(Number.__proto__ === Function.prototype) // true