// Iterative Fibonacci
function iFibonacci(num){
    if(num == 0){
        return 0
    }
    if(num == 1){
        return 1
    } else {
        var num1 = 0;
        var num2 = 1;
        for(var count = 1;count < num; count++){
            var num3 = num1 + num2
            var fib = num2 + num3
            num1 = num2
            num2 = num3
        }
        return fib - num1
    }
};

// Iterative Fibonacci ** Refactored **
function iFibonacci(n){
    var fibs = [0,1];
    for(var i = 0; i < n; i++){
        fibs.push(fibs[0] + fibs[1])
        fibs.shift()
    }
    return fibs[0];
};

// Recursive Fibonacci
function rFibonacci(n){
    if(n == 0){
        return 0
    } else if(n == 1 || n == 2){
        return 1
    }
    return rFibonacci(n - 2) + rFibonacci(n - 1)
};