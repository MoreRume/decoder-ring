// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
     const polySquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"]
    ];
  
       //need to write a function for numbers to letters 
 function numToLetters(codeLetter) {
    const first = codeLetter[0] - 1;
    const second = codeLetter[1] - 1;
 const polySquare = [
      ['a', 'f', 'l', 'q', 'v'],
      ['b', 'g', 'm', 'r', 'w'],
      ['c', 'h', 'n', 's', 'x'],
      ['d', 'i/j', 'o', 't', 'y'],
      ['e', 'k', 'p', 'u', 'z']
    ];
   //need to reutrn first and second 
    return polySquare[first][second];
  } 
  
  function polybius(input, encode = true) {
    // your solution code here
     return (encode ? polyEncoder(input) : polyDecoder(input));
    
    
    function polyEncoder(input){

    let lowerInput = input.toLowerCase()
    let solved = ""
    for(let i=0; i<lowerInput.length; i++){
      if (lowerInput[i] ==="i" || lowerInput[i] === "j"){
        solved+= "42"
      } 
      else if( lowerInput [i]=== " "){solved += " "}
      else{
       let x;
        for(let row = 0; row<polySquare.length; row++){
            for(let col = 0; col<polySquare[row].length; col++){
                if(lowerInput[i]===polySquare[row][col]){
                   x = `${col+1}${row+1}`;
                  
                solved += x
              }
        }
    }
          } 
  }return solved
      }   
  }
  
   function polyDecoder(input){
         //need to test if even becuase odd would be false 
    const testIfEven = input.split(' ');
    let testPass = true;
   
    // if not even num return false 
    testIfEven.forEach(letterWord => {
      if (letterWord.length % 2) testPass = false;      
    });
    if (!testPass) return testPass;
    const input2 = input.split('');
    const result2 = []; 
     //need to for loop througt input2 and push ''
    for (let i = 0; i < input2.length; i++) {    
      if (input2[i] === ' ') {
        result2.push(' ');
      } else {  
        const numLetter = [input2[i], input2[i+1]];
        i++;
        result2.push(numToLetters(numLetter))
        }
    }
    return result2.join('');
 
     
  
  }
                 
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };