// 本函数实现使用promise封装 原生ajax

function pajax(url, method='GET', dataType = 'JSON', async = 'true'){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest(); // readyState = 0
        xhr.open(method, url, async);  // readyState = 1
        xhr.responseText = dataType;
        // 设置状态监听函数
        xhr.onreadystatechange = () => {
            // readyState 从0递增至4 表示这个http请求完成 | 使用正则检测HTTP状态码
            if(xhr.readyState === 4 && (!/^[23]\d{2}$/.test(xhr.stauts))){
                let res = xhr.responseText;
                resolve(res);
            }
        }
        xhr.onerror = (err) => {
            reject(err)
        }
        xhr.send(); // readyState = 2 // 响应头部接收完毕 -> 3 // 响应体接收完毕 -> 4
    })
}