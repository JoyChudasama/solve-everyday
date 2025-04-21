function arraySum(arr){
    return arraySumHelper(arr, 0, 0)
}

function arraySumHelper(arr, i, sum){
    if(i > arr.length - 1) return sum;
    return arraySumHelper(arr, i + 1, sum + arr[i])
}

console.log(arraySum([1,2,3,4,5]));