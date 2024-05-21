function isPalindrome(string) {
  // Start coding here
  const reverseString = string.split("").reverse().join("");
  return reverseString === string;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
