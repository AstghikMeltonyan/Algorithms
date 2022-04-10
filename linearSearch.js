let arr = [1,2,4,5,6,7,88,99,11,22];
let count = 0;

function linearSearch( arr, el ) {
    for ( let i = 0; i < arr.length; i++) {
        count++;
        if (el === arr[i]) {
            return i
        }
    }
    return -1
}
console.log(linearSearch(arr,-88));
console.log(count);