function digitsInNum(num){
    num = num.toString();
    return digitsInNumHelper(num, 0, 0);
}

function digitsInNumHelper(s, i, numOfDigits){
    if(i > s.length - 1) return numOfDigits;
    return digitsInNumHelper(s, i+1, numOfDigits+1);
}

console.log(digitsInNum(1234));