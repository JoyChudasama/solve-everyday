
function reverseString(string){
    return reverseStringHelper(string, string.length - 1, '')
}

function reverseStringHelper(s, i, reversedString){
    if(i < 0) return reversedString;
    return reverseStringHelper(s, i - 1, reversedString += s[i])
}

console.log(reverseString('abcdefg'));

