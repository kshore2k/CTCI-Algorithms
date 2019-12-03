// FizzBuzz Classic
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

// FizzBuzz using String Concatenation
const fizzBuzz = (n) => {
    const res = [];

    for (let i = 1; i <= n; i++) {
        let answer = "";

        const mod3 = (i % 3 == 0);
        const mod5 = (i % 5 == 0);

        if (mod3) {
            answer += "Fizz";
        }
        if (mod5) {
            answer += "Buzz";
        }

        if (answer == "") {
            answer += i;
        }

        res.push(answer);
    }

    return res;
};

// FizzBuzz using Object mappings (optimal for more mappings ex. 3,5,7,11...)
const fizzBuzz = (n) => {
    const res = [];
    const map = {
        3: "Fizz",
        5: "Buzz"
    };
    const keys = Object.keys(map);

    for (let i = 0; i <= n; i++) {
        let answer = "";

        for (let key of keys) {
            if (i % key == 0) {
                answer += map[key];
            }
        }

        if (answer === "") {
            answer += i;
        }

        res.push(answer);
    }

    return res;
};

// FizzBuzz using Logical(short circuit) evaluation & ternary operator
function fizzBuzz(){
    for(let i = 0; i < 100;)console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
};