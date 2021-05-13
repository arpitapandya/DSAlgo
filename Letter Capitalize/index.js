function LetterCapitalize(str) { 
    words = [];
    words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
    }
    // code goes here  
    return words.join(' '); 
}

  // keep this function call here 
LetterCapitalize(readline());