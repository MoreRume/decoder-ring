// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length != 26
      // some way to check for duplicates
      ){
      return false
    }
    for (let i = 0; i < alphabet.length; i ++) {
    if(alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i]) ) {
    return false;
    }
    };
    let solved = ""
    const rosetta = "abcdefghijklmnopqrstuvwxyz"
  /* for(let char of input){
   let key = rosetta.indexOf(char)
   let codedIndex = alphabet.indexOf(input[char])
   solved += rosetta[codedIndex]

   }
return solved



  }*/
      let positionIndex = "";
    let codedIndex = "";
    
     for (let i = 0; i < input.length; i++) {
      positionIndex = rosetta.indexOf(input[i]);
      codedIndex = alphabet.indexOf(input[i]);
        if (input[i] === " ") {
          solved += " ";
        } else if (encode === false) {
          solved += rosetta[codedIndex];
        } else {
          solved += alphabet[positionIndex];
        }
    } return solved
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };