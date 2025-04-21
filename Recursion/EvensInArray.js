function numOfEvens(arr){
    return numOfEvensHelper(arr, 0, 0);
}

function numOfEvensHelper(arr, i, currentTotalEvens){
    if(i > arr.length - 1) return currentTotalEvens;
    return numOfEvensHelper(arr, i+1, arr[i] % 2 === 0 ? currentTotalEvens+=1 : currentTotalEvens+=0)
}

console.log(numOfEvens([2,3,4,6,1]));