var value = 20;
(function () {
  console.log(name); // 提升 Undefined
  console.log(value); // 提升 + 死区 ReferenceError
  var name = 'local value';
  let value = 21;
})();