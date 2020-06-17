var obj = {};
function unique(arr) {
    
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
    
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
        console.log(JSON.stringify(obj))
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]   //所有的都去重了

function unique(arr){
    return arr.reduce((prev,cur) => {
        console.log(prev, cur)
        return prev.includes(cur) ? prev : [...prev,cur]},[]);
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr));
//  [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]