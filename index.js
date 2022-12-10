function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]
  }
  return reverseWord === word
}

/* 
  -Add your pseudocode here
  -initialize empty string reverseWord
  -iterate through word backwards 
  -add the value of word[i] to reverseWord
  -check if reverseWord === word
*/

/*
  Add written explanation of your solution here
  - The function isPalindrome takes one argument that is a string
  - The function checks if the recieved string reads the same fowards and backwards
  - The function returns true if the string reads the same or false if it does not 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Jamaica"));
}

module.exports = isPalindrome;
