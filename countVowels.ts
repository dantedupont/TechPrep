function countVowels(string: String): Number {
    const vowels: String[] = ['a', 'e', 'i', 'o', 'u']
    let vowelAmount: number = 0
    
    for(let i = 0; i < string.length; i++){
        
        if (vowels.includes(string.charAt(i))){
            vowelAmount+=1
        }
    }
    return vowelAmount
}

console.log(countVowels('test'));

// Solved in 9 minutes 
// Got stuck using the object operator 'in' rather than the array method 'includes'
// Expected time complexity: O(N)
