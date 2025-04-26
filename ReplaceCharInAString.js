function replaceChar(string, charToReplace, replacementChar){
    return replaceCharHelper(string, charToReplace, replacementChar, string.split(''), 0)
}

function replaceCharHelper(s, toBeReplaced, toReplace, sArr, i){
    if(i > s.length - 1) return;
    if(s[i] === toBeReplaced) sArr[i] = toReplace 
    replaceCharHelper(s, toBeReplaced, toReplace, sArr, i+1)
    
    return sArr.join('')
}

console.log(replaceChar("banana", "a", "x"));