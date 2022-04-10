// arag sortavorum 40 qayl
let arr = [2,4,7,1,8,5,9,11,2,3,6,77,8]
let count = 0;
function sort(arr, start, end) {
    if( start < end){
        let pos = partition(arr, start, end)
        sort (arr, start, pos - 1);
        sort (arr, pos + 1, end);
    } 
}

function partition(arr, start, end) {
    let i = start;
    let j = start;
    while( i <= end ){
        count++;
        if(arr[i] > arr[end]) i++;
        else { 
            swap(arr, i, j)
            i++;
            j++
        }
    }
    return j - 1
}

function swap(arr, pos1, pos2) {
    let tmp = arr[pos1];
    arr[pos1] = arr[pos2]
    arr[pos2] = tmp
}

sort(arr, 0, arr.length-1)
console.log(arr);
console.log(count);