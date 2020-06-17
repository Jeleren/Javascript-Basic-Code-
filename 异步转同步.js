const repeat = function(func, times, wait){
    return async function(str){
       for(let i = 0; i < times; i++){
            await new Promise((resolve, reject) => {
                setTimeout(()=> {
                    func(str);
                    resolve();
                 }, wait)
                 
            })
       }
    }
}

let repeatFunc = repeat(console.log, 4, 3000);
repeatFunc('hello world').then(() => repeatFunc('nice')).then(() => repeatFunc('third'))
