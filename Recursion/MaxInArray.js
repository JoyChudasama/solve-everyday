function maxInArray(arr){
    return maxInArrayHelper(arr, 0, Number.NEGATIVE_INFINITY);
}

function maxInArrayHelper(arr, i, currentMax){
    if(i > arr.length - 1) return currentMax;
    return maxInArrayHelper(arr, i+1, Math.max(currentMax, arr[i]))
}

console.log(maxInArray([5,3,9,1]));