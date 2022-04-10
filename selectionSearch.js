let arr = [5,1,6,2,9,3,8,4,7,1,-3];
let count = 0;

function selectionSearch( arr ) {
    for ( let i =0;i <arr.length; i++) {
        let min = i;
        for ( let j = i+1; j < arr.length; j++) {
            if ( arr[min] > arr[j]){
                min = j;
            }
            count++;
        } 
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }
    return arr
}

console.log(selectionSearch(arr));
console.log(count);