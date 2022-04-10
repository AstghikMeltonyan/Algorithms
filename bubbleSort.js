let arr = [2, 8, 3, 9, 1, 7, 5, 6, 4, 0, -2];
let count = 0;

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp
            }
            count++;
        }
    }
    return arr
}

console.log(bubbleSort(arr));
console.log(count);