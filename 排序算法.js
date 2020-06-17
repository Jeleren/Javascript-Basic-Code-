let arr = [10, 7, 90, 38, 1, 44]
function quickSort(a){ // 快速排序的核心思想是分治法，需要用到递归，利用一个基准 将整体数据分为两个部分 再依次执行相同的步骤 直到所有数据都排好
    let tar = a[0];
    let left = [], right = []; // 这里需要额外的空间 实际上是空间换时间
    if(a.length <= 1) return a;
    for(let i = 1; i < a.length; i++){
        if(a[i] > tar) right.push(a[i])
        else left.push(a[i])
    }
    return [...quickSort(left), tar, ...quickSort(right)]
}
console.log('快速排序数组递归：',quickSort(arr))

function quickSort1(a, left, right){
    if(left == right || left > right) return
    let tar =  a[left], index = left, l = left, r = right, isL = true;
    while(left < right){
        if(isL && a[right] < tar){
            a[left] = a[right]
            a[right] = tar
            index = right
            left++
            isL = false
        }else if(isL)
            right--
        if(!isL && a[left] > tar){
            a[right] = a[left]
            a[left] = tar
            index = left
            right--
            isL = true
        } else if(!isL) left++
    }
    quickSort1(a, l, index)
    quickSort1(a, index + 1, r)
    return a
}
console.log('快速排序递归：', quickSort1(arr, 0, arr.length - 1))
arr = [10, 7, 90, 38, 1, 44] // 引用类型的值arr 

// 快速排序 非递归
function quickSort2(a, left, right){
    // 维护一个数组 表示主要排序的区间
    let list = [[left, right]]
    let tar, index, l, r, isL = true;
    while(list.length){
        left = list[0][0], index = left, l = left, tar = a[left], right = list[0][1], r = right
        while(left < right){
            if(isL && a[right] < tar){
                a[left] = a[right]
                a[right] = tar
                index = right
                left++
                isL = false
            }else if(isL){ 
                right--
            }
            if(!isL && a[left] > tar){
                a[right] = a[left]
                a[left] = tar
                index = left;
                right--;
                isL = true
            } else if(!isL) left++
        }
        list.shift()
        if(l < index)
            list.push([l, index])
        if(index + 1 < r)
            list.push([index + 1, r])
    }
    return a
}
console.log('快速排序非递归：', quickSort2(arr, 0 , arr.length - 1))
arr = [10, 7, 90, 38, 1, 44] // 引用类型的值arr 

function popSort(a){ // 冒泡排序 从前往后 依次对比相邻两个数值的大小 如果后面的比前面的小就交换（升序） 如果后面的比前面大不用交换 所以需要一个索引标记当前比较的元素
    let len = a.length;
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j <len; j++){
            if(a[j] > a[j + 1]){
                let temp = a[j+1]
                a[j + 1] = a[j]
                a[j] = temp 
            }
        }
        len--;
    }
    return a;
}
console.log('冒泡排序:', popSort(arr))
arr = [10, 7, 90, 38, 1, 44] // 引用类型的值arr 

/**归并排序 分治法
 * 先将数组分组 直到组内只有一个元素，便与相邻的组进行排序，最后形成两个有序的组，再将两个有序的组合并
 * 递归sort sort结束后merge
 *  */ 
// 融合两个有序数组，这里实际上是将数组 arr 分为两个数组
 console.log('归并排序：',mergeSort(arr))

 function mergeSort(arr) {
    const len = arr.length;
  
    if (len < 2) { return arr; }
  
    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
  
    while (left.length > 0 && right.length > 0) {
      result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
  
    return result.concat(left, right);
  }
  
  