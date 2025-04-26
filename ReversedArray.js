function reverseArray(arr){
    return reverseArrayHelper(arr, arr.length - 1, []);
}

function reverseArrayHelper(arr, i, reversedArray){
    if(i < 0) return reversedArray;
    reversedArray.push(arr[i])
    return reverseArrayHelper(arr, i-1, reversedArray)
}

console.log(reverseArray([1,2,3]));