console.log(f1);
console.log(f2);
function f1(){
    console.log('f1');
}

var f2 = function () { console.log('f2') }



// 执行函数 -> 上下文执行栈 -> 进入执行上下文 -> 初始化变量对象 -> 执行代码
// 变量对象包括（函数形参 arguments 直接初始化，函数声明（函数声明只能被函数声明所覆盖，不能被其余任何所覆盖），变量声明
console.log(foo)
var foo = 1;
function foo(){
    console.log('a')
}
var foo = 2;
