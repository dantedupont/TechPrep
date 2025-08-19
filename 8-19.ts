// implement a simple calculator that supports +, -, /, and * on exactly two numbers.
// Your input will be a string, like "4 * 8" or "66 / 33".
// You don't need to do any validation on the input; assume all operators and numbers are separated by a string.
// Next: implement multiple operations, evaluated left-to-right. e.g "3 - 1 - 1" is 1. "5 * 2 * 2" is 20.
// Next: implement parentheses. "3 - 1 - 1" is 1, but "3 - (1 - 1)" is 3. "4 - (6 - (1 - 1))" is -2.

function calcuate(input: string): number {
    // 1. Break down the string based on spaces
    const inputArray = input.split(' ')

    // 2. save the left and right as the numbers and the middle as the operator
    const firstArg = Number(inputArray[0])
    const secondArg = Number(inputArray[2])
    const operator = inputArray[1]
    let result = 0

    // 3. Do the calculation and return answer
    switch(operator){
        case "+": result = firstArg + secondArg
                  break;
        case "-": result = firstArg - secondArg;
                  break;
        case "*": result = firstArg * secondArg;
                  break;
        case "/": result = firstArg / secondArg;
                  break;
    }
    return result
} // TODO. Rename this and add types!

function calcuateMultiple(input: string): number {
    // 1. Break down the string based on spaces
    const inputArray = input.split(' ')

    // 2. Calculate first 3 
    const firstArg = Number(inputArray[0])
    const secondArg = Number(inputArray[2])
    const operator = inputArray[1]
    let result = simpleCalculate(firstArg, operator!, secondArg)

    // 3. Iterate through the rest of the array, new result equals old result "operatored" with new number
    for(let i = 3; i < inputArray.length; i = i + 2){
        let operator = inputArray[i]
        let num = Number(inputArray[i + 1])
        result = simpleCalculate(result, operator!, num)
    }
    return result
} 

function simpleCalculate(firstArg: number, operator: string, secondArg: number): number {
    let result = 0
    switch(operator){
        case "+": result = firstArg + secondArg
                  break;
        case "-": result = firstArg - secondArg;
                  break;
        case "*": result = firstArg * secondArg;
                  break;
        case "/": result = firstArg / secondArg;
                  break;
    }
    return result
}

function assert(expected: number, actual: number) {
    if (expected !== actual) {
        console.log("Test case failed! Expected", expected, "but you returned", actual)
    }
}

assert(20, calcuate("5 * 4"))
assert(2, calcuate("66 / 33"))
assert(1, calcuate("2 - 1"))
assert(50, calcuate("50 + 0"))


