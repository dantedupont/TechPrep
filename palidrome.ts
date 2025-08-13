function checkPalindrome(string: String): Boolean {
    const reversedString: String = string.split('').reverse().join('')
    
    if (string === reversedString){
        return true
    } else {
        return false
    }
}

console.log(checkPalindrome('hello'));

// Solved in 2.5 minutes (I learned this other way to reverse strings after finishing the last problem)
// Expected time complexity O(N)