class EventBus{
    constructor(){
        this.event = Object.create(null)
    }
    // 注册事件
    on(name, fn){
        if(!this.event[name]) this.event[name] = []
        this.event[name].push(fn)
    };

    // 触发事件
    emit(name, ...args){
        if(this.event[name]) this.event[name].forEach(fn => {
            fn(...args)
        });
    };

    // 只被触发一次的事件
    once(name, fn){
        if(!this.event[name]){
            this.event[name] = []
        }
        let _this = this
        this.event[name].push(function once(...args) {
            fn(...args)
            _this.off(name, once)
        })
    };
    off(name, fn){
        this.event[name] = this.event[name].filter(cb => fn !== cb)
    }
}
let f1 = function () {
    console.log('执行了f1')
}
let f2 = function () {
    console.log('执行了f2')
}

let e = new EventBus()
e.once('success', f1)
e.on('success', f2)
console.log(e)
e.emit('success')
e.off('success')
e.emit('success')