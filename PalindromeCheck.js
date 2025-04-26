function isPalindrome(s, i = 0) {
    const j = (s.length - 1) - i;
    if (i >= j) return true;
    if (s[i] !== s[j]) return false;
    return isPalindrome(s, i + 1);
  }


console.log(isPalindrome('racecar'));
console.log(isPalindrome('level'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('a'));
console.log(isPalindrome(''));

