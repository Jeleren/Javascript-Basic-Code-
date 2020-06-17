var name = 'window'
var obj = {
    name: 'obj',
    age: 23,
    getName: function() {
        return function(){
            console.log(this.age)
            return this.name;
        }
    }
}
console.log(obj.getName()()) // 非严格模式下

// 一般情况下 this指向的是当前的作用域（对象实例）

// 全局环境中（无论是否是'use strict'）都指向全局对象

// 在函数内部 this指向取决于函数调用的方式

    // 1. 普通函数 在非严格模式下 this默认指向全局对象
            // 在严格模式下，this指向调用函数的对象实例
            // 如果想要把this传递到另一个环境，就要使用call或者apply
            var obj = {a: 'Custom'};

            // 这个属性是在global对象定义的。
            var a = 'Global';
            
            function whatsThis(arg) {
              return this.a;  // this的值取决于函数的调用方式
            }
            
            console.log(whatsThis(),       // 'Global'
            whatsThis.call(obj),  // 'Custom'
            whatsThis.apply(obj)); // 'Custom'

            /////
            function add(c, d) {
                return this.a + this.b + c + d;
            }
              
            var o = {a: 1, b: 3};
            
            // 第一个参数是作为‘this’使用的对象
            // 后续参数作为参数传递给函数调用
            console.log(add.call(o, 5, 7)); // 1 + 3 + 5 + 7 = 16
            // 第一个参数也是作为‘this’使用的对象
            // 第二个参数是一个数组，数组里的元素用作函数调用中的参数
            console.log(add.apply(o, [10, 20])); // 1 + 3 + 10 + 20 = 34

// 2. 箭头函数  箭头函数没有自己的this指针 在封闭的词法环境中，箭头函数的this与普通函数的一致；在全局环境中，this指向全局对象

var obj = {
    bar: function() {
      var x = (()=> this);
      return x;
    }
  }
  // 以obj为对象来调用bar()，所以this绑定的是obj
  var fn = obj.bar();
  console.log(fn() === obj); // true
  
  // 这里并没有调用bar()，只是引用bar赋给fn2
  var fn2 = obj.bar;
  // 使用全局变量来调用bar(),所以这里的this绑定全局
  console.log(fn2()() == window);

  

///// bind(this)
//调用f.bind(someObject)会创建一个与f具有相同函数体和作用域的函数，但是在这个新函数中，this将永久地被绑定到了bind的第一个参数，无论这个函数是如何被调用的。
//bind绑定的参数只生效一次。
function f(){
    return this.a;
  }
  
  var g = f.bind({a:"azerty"});
  console.log(g()); // azerty
  
  var h = g.bind({a:'yoo'}); // bind只生效一次！
  console.log(h()); // azerty
  
              
            
