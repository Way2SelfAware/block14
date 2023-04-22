// set a variable for word to run through//
// run through each word "hello", "ukelele", "awesome", "onomonopia", "textbook"
const word = "onomonopia";
// set up varaibles to keep track of the number of vowels and consonants//
let vowels = 0;
let consonants = 0;
// create a for loop  //
for (let i = 0; i < word.length; i++) {
  const letter = word[i];
  // create an if statement to specify what a vowel is, while every other letter is considered a consonant//
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    // increment the vowels variable//
    vowels++;
  } else {
    // increment the consonants variable//
    consonants++;
  }
}
// console log word has number of vowels and consonants example "hello has 3 consonants and 2 vowels"//
console.log(
  word + " has " + vowels + " vowels" + " and " + consonants + " consonants"
);
