function reverseString(string: String): String {
    // 1. go through the string backwards and get each character
    // 2. add that char onto another string
    let reversedString: String = ''
    for(let i = string.length; i > -1; i--){
        let char = string.charAt(i)
        reversedString += char  
    } 
    return(reversedString)
}
console.log(reverseString('hello'))

// Solved in 8:45 minutes
// Learned about charAt method (another possibility would have been to treat string as an array)
// Expected time complexity: O(N)