function deepClone(obj){
    let res = obj.constructor === Object? {} : []
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] && obj[key] instanceof Object){
                // res[key] = obj[key].constructor === Object ? {} : []
                res[key] = deepClone(obj[key])
            } else res[key] = obj[key]
        }
    }
    return res
}

let obj = {
    a: 1,
    b: 2,
    c: {
        d: 3
    },
    e: [1,2,3]
}, arr = [1, 2]
let res = deepClone(obj)
console.log(res)
res.a = 2
res.c.d = 4
res.e[1] = 9
console.log(obj)
console.log(res)

console.log({...obj})
let set = new Set([1, 2])
console.log(...set)