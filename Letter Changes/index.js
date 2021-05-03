// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterChanges(str) { 
    let char = "abcdefghijklmnopqrstuvwxyz";
    let newChar = "bcdEfghIjklmnOpqrstUvwxyzA";
    let result = "";

    // code goes here
    for (i = 0; i < str.length; i++) {
      if (char.indexOf(str[i]) !== -1) {
        result += newChar.charAt(char.indexOf(str[i]));
      } else {
        result += str[i];
      }
    }
    return result; 
  }
    
  // keep this function call here 
  LetterChanges(readline());