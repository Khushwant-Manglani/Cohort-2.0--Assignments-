/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s=0, e=str.length-1;
  while(s<e) {
    while(s<e && ( str[s]<'A' || (str[s]>'Z' && str[s]<'a') || str[s]>'z')) s++;
    while(s<e && ( str[e]<'A' || (str[e]>'Z' && str[e]<'a') || str[e]>'z')) e--;

    if(s<e && ( str[s] != str[e] && str.charCodeAt(s)+32 != str.charCodeAt(e) && 
        str.charCodeAt(s) != str.charCodeAt(e)+32 )) return false;

    s++, e--;
  }
  return true;
}

module.exports = isPalindrome;
