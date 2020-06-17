//1. 单链继承
function Father(age){
    this.age = age;
    this.list = ['我是菜鸟']
}

Father.prototype.printAge = function (){
    console.log(this.age)
}

function Child1(name, age) {
    this.age = age;
    this.name = name;
}
Child1.prototype = new Father();
Child1.prototype.constructor = Child1; // 没有这个语句的话，新建的对象是Father类型的
Child1.prototype.printName = function() {
    console.log(this.name)
}

var c = new Child1('jeleren', 22)
console.log(c)
// c.printName()
// c.printAge()
let b = new Child1('jack', 23)
b.age = 24
b.list[0] = '我是高手'
console.log(c.list) // 我是高手
// 原型链继承 一旦一个子类实例修改了继承自父类的引用类型的数据，将会修改所有子类的该数据
// 原型链继承 中子类不能向父类传参

// 2. 构造函数继承
// 父类同上
function Child2(name, age){
    Father.call(this, age)
    this.name = name;
}
c = new Child2('jeleren', 22)
console.log(c)
//c.printAge() // TypeError: c.printAge is not a function
// 构造函数继承不能继承父类原型上的属性方法

// 3. 组合式继承
// 将原型链继承和构造函数继承结合起来
// 父类同上
function Child3(name, age) {
    Father.call(this, age)
    this.name = name;
}
Child3.prototype = new Father(); 
Child3.prototype.constructor = Child3;
console.log('组合式继承')
c = new Child3('jeleren', 22)
console.log(c)
c.printAge() // 22
c1 = new Child3('jack', 23)
c1.list[0] = '我是高手'
console.log(c.list) // ['我是菜鸟']
// 缺点 每次创建子类实例 都执行了两次父类构造函数 原型中会存在两份相同的属性和方法

// 4. 组合寄生式继承
console.log('组合寄生式继承')
// 就是要只执行一次父类构造函数，但是子类中的构造函数继承是必不可少的 就改变子类原型的指向方式即可
function Child4(name, age){
    Father.call(this, age)
    this.name = name;
}
Child4.prototype = Object.create(Father.prototype)
Child4.prototype.constructor = Child4
c = new Child4('jeleren', 22)
console.log(c)

