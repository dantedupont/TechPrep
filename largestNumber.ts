function findLargestNumber(arr: Number[]): Number {
    // 1. keep track of the first value in the array
    // 2. iterate through the array, if any other value is bigger than the first, hold that one instead
    if(arr.length === 0){
        throw new Error('Array is empty')
    }
    let largestNumber: Number = arr[0]!
    for(let i = 0; i < arr.length; i++){
        if(arr[i]! > largestNumber){
            largestNumber = arr[i]!
        }
    }
    return largestNumber
}

console.log(findLargestNumber([-1, 4, -100, -3, 0]));


// Core algorithm solved in 9 minutes, another 6 minutes to fix type errors. 15 mins total
// Had to look up how to correctly throw Error (on mdn docs, no cheating), I was rusty
// Even though its working as I expected, I'm concerned about the number of assertions that I used
// Time complexity: O(N)
