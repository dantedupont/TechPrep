function getFactorial(num: number): number {
    // 1. Multiply number by the next smaller number
    // 2. As long as the next number is larger than 1, repeat step 1 
    if(num === 0){
        return 1
    }
    let result = num
    while (num > 1){ 
        result = result * (num - 1)
        num--
    }

    return result

}

console.log(getFactorial(5));

// Solved in ~12 minutes
// Time complexity O(N)

function getRecursiveFactorial(num: number): number {
    if(num === 0){
        return 1
    }
    if(num === 1){
        return num
    }
    let result = num * getRecursiveFactorial(num - 1)
    return result

}

console.log(getRecursiveFactorial(4));

// I misunderstood and thought I needed to make a recursive one too, here is the anwer
// Once I understood what the base case needed to be it clicked into place
// TIL that this would be O(N) time complexity AND space complexity because it keeps calling itself onto the stack 
