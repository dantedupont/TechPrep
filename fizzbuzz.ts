function fizzbuzz() {
    for(let i = 1; i < 101; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        } else if(i % 3 === 0){
            console.log('Fizz');
        } else if(i % 5 === 0){
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzbuzz()

// Solved in 3.5 minutes
// Expected Time Complexity O(N)