/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let freqStr=[];

  for(let i=0 ; i<123 ; ++i) freqStr[i]=0;
  for(let i=0 ; i<str1.length ; ++i) { 
    if(str1[i]>='A' && str1[i]<='Z') freqStr[str1.charCodeAt(i)+32]++; 
    else freqStr[str1.charCodeAt(i)]++;
  }
  for(let i=0 ; i<str2.length ; ++i) {
    if(str2[i]>='A' && str2[i]<='Z') freqStr[str2.charCodeAt(i)+32]--;
    else freqStr[str2.charCodeAt(i)]--;
  }

  for(let i=0 ; i<123 ; ++i) {
    if(freqStr[i]!=0) return false;
  }

  return true;
}

module.exports = isAnagram;
