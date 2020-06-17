function init() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数,一个闭包
        console.log(name); // 使用了父函数中声明的变量
    }
    displayName();
}
init();


/**
 * 一般来讲 函数内的局部变量只能在函数执行过程中进行调用，然而js函数会形成闭包，
闭包是由函数以及形成该函数的词法环境共同组成，这个环境包含了这个函数所能访问到的所有局部变量

 */

function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

/**
 * 在上例中，myFunc 是makeFunc 执行返回的displayName的引用，而displayName实例仍能放访问makeFunc的局部变量name
 */

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  // add5 & add10 都是闭包，共享相同的函数定义，但保存了不同的词法环境
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12

  // 用闭包模拟私有方法
  // (function(){})() 立即执行的匿名函数
  // 外部函数 不能直接访问匿名函数内的变量或者函数
  var Counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }   
  })();
  
  console.log(Counter.value()); /* logs 0 */
  Counter.increment();
  Counter.increment();
  console.log(Counter.value()); /* logs 2 */
  Counter.decrement();
  console.log(Counter.value()); /* logs 1 */