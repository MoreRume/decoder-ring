// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift ||shift===0 || shift > 25 || shift < -25){return false}
const alphabet = "abcdefghijklmnopqrstuvwxyz"
//go through the input letter by letter and get key value
//add value of key to each letter
//for wrap around(over 25) subtract 26
//   deal with spaces and symbols   
let solved = "";
if (encode === false) {
      shift = shift * -1;
    }

for(let alpha of input){let letter=alpha.toLowerCase()

  if(!alphabet.includes(letter)){solved+=letter}else{
    const indexLetter = alphabet.indexOf(letter);

  //if(Key > 25){key - 26}
  let indexed = indexLetter + shift;
  if (indexed > 25){indexed += -26;
  };
    if (indexed < 0 && indexed > -25) {
          indexed += 26;
        }
const shiftedLetter = alphabet[indexed];
        solved += shiftedLetter;
}}return solved;

//REMEMBER shift can't be 0, less than -25, or greater than 25
//spaces and symbols are maintained
//capital letters are ignored

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };