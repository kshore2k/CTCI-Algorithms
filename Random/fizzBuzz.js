// FizzBuzz
function fizzBuzz(num){
    for(var x = 1; x <= num; x++){
        if(x % 15 === 0){
            console.log('FizzBuzz')
        } else if(x % 5 === 0){
            console.log('Buzz')
        } else if(x % 3 === 0){
            console.log('Fizz')
        } else {
            console.log(x)
        }
    }
};

// FizzBuzz using Logical(short circuit) evaluation & ternary operator
function fizzBuzz(){
    for(let i = 0; i < 100;)console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
};