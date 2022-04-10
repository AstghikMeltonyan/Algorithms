let arr = [1,2,5,6,7,8,9,11,22,33,44];
let count = 0; 

function binarSearch(arr, el) {
    let start = 0;
    let end = arr.length;
    let mid;
    while (start < end ) {
        count++;
        mid = Math.floor((start+end)/2)
        if ( el === arr[mid]){
            return mid
        }else if ( el < arr[mid]) {
            end = mid-1
        }else {
            start = mid + 1
        }
    }
    return -1;
}

console.log(binarSearch(arr,44));
console.log(count);

// recursion

function binarRecursiv (arr,el, start, end) {
    let mid = Math.floor((start+end)/2)
    if ( start > end ) return -1
    while ( start < end ) {
        if ( el === arr[mid] ) {
            return mid
        }
        if ( el < arr[mid]) {
            return binarRecursiv (arr, el, start, mid -1)
        }else {
           return binarRecursiv ( arr, el, mid+1, end)
        }
    }
}
console.log(binarRecursiv(arr,-5,0,arr.length));

