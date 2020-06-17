(function () {
    // for循环先进入线程 当i=0时 走到setTimeout 循环还没有走完，setTimeout会被放置到异步队列 等待执行
    // 当for循环完成时 才会执行setTimeout for循环共享同一个词法环境 即共享i 此时i一边为3
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i); // 3 3 3
        }, 0)
    }
})();

// 解决方法
/**
 * 1.将var换成let let使for循环每次执行都是一个新的块级作用域 三次for循环的词法环境不同
 */
(function() {
    for(let i = 0; i < 3; i++){
        setTimeout(function(){
            console.log(i); // 0 1 2
        }, 0)
    }
})();

/**
 * 2. 用自执行函数包裹
 */

 (function(){
     for(var i = 0; i < 3; i++){
         !function(i){  // ! 充当括号的作用 也为立即执行的匿名函数 线程会优先执行立即执行函数
             setTimeout(function(){
                 console.log(i); // 0 1 2
             }, 0);
         }(i)
 }
})();