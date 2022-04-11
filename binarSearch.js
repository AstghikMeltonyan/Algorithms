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

function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2); // 3
    
    if(start > end) return -1;

    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
   
}

console.log(recursiveBinarySearch(array, 5, 0, array.length))

