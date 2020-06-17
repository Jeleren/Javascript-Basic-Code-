/**
 * js 代码执行为解释执行过程，分为预编译期和执行期 以代码块为单位 边解释边执行
 * 在预编译期 会将文件中所有的函数和变量提升到作用域的最前面 进行变量声明 但不进行赋值 变量默认为缺省值undefined 
 * 函数就是原来的函数 不做其他赋值
 **/
console.log(a);
first();
var a = 1;
console.log(first);
function first(){ // first 整个函数被提升到作用域的最前面
    console.log(a, "first execute"); // a 已经在该函数内定义，在编译时提升至函数作用域最顶层 为undefined
    var a = 2;
}
first();