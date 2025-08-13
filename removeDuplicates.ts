function removeDuplicates(arr: any[]): any[] {
    // 1. take a value of the array and add it to the filtered array
    // 2. if the filtered array already has that value, don't add it
    // 3. repeat 1 and 2 for each value
    let filteredArray: any[] = []
    if(arr.length === 0){
        throw new Error("Array is empty!")
    }
    for (let i = 0; i < arr.length; i++){
        let value = arr[i]
        if(filteredArray.includes(value)){
            continue
        } else {
            filteredArray.push(value)
        }
    }
    
    return filteredArray
}

console.log(removeDuplicates([2,2,3,4,3,5,7,8,3,4]));

// solved in 16 minutes
// I tested using the filter method with no success, realized it wasn't necesary 
// time complexity: O(N^2) -> N for the for loop, N for the includes
// Just learned that making a new Set automatically does this with O(N)... 
