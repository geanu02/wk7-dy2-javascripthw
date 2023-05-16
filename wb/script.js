// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords = (sentence) => {
  const _ls = sentence.split(" ");
  let _result = "";
  for (let i = 0; i < _ls.length; i++) {
    let _word = _ls[i];
    if (_word.length >= 5) {
      let chars = [..._word];
      chars.reverse();
      _result += chars.join("") + " ";
    } else {
      _result += _word + " ";
    }
  }
  return _result;
};

console.log(spinWords("Hey fellow warriors"));
// => returns "Hey wollef sroirraw"
console.log(spinWords("This is a test"));
// => returns "This is a test"
console.log(spinWords("This is another test"));
// => returns "This is rehtona test"
