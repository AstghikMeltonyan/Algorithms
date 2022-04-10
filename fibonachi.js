// fibonachin naxord 2 tveri gumaare fib = (n-1) +( n-2)

function fibonachi(num) {
    if( num === 1 || num ===2 ) return 1;
    return fibonachi(num-1) + fibonachi(num-2)
}

console.log(fibonachi(8));