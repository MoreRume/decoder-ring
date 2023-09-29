const {expect} = require("chai")
const {substitution} = require("../src/substitution")


describe("substitution", () => {
  
  describe("common errors", () => {
   it("Should return false if no alphabet is given", () => {
   const input = "hello"
   const expected = false
   const actual = substitution(input)
   expect(actual).to.equal(expected)
}
)
    
      it("Should return false if the alphabet is not 26 characters", () => {
   const input = "hello"
   const alphabet = "sjfqkdag"
   const expected = false
   const actual = substitution(input, alphabet)
   expect(actual).to.equal(expected)
}
) 
 
          it("Should return false if the alphabet is not unique characters", () => {
   const input = "hello"
   const alphabet = "ahdkghfkditngitnesidntosng"
   const expected = false
   const actual = substitution(input, alphabet)
   expect(actual).to.equal(expected)
}
)    
}
)
 
  describe("encoding", () => {
           it("should encode a message with a given alphabet", () =>{
    const input = "abcdef"
    const alphabet = "qwertyuiopasdfghjklzxcvbnm"
    const expected = "qwerty"
    const actual = substitution(input, alphabet)
  })
           
 
           it("should work with unique characters in its alphabet", () =>{
    const input = "abcdef"
    const alphabet = "*&#%$@uiopasdfghjklzxcvbnm"
    const expected = "*&#%$@"
    const actual = substitution(input, alphabet)
  })         
           
           
           it("should preserve spaces when encoding", () =>{
    const input = "abc def"
    const alphabet = "qwertyuiopasdfghjklzxcvbnm"
    const expected = "qwe rty"
    const actual = substitution(input, alphabet)
  })      
           })
  
  describe("decoding", () => {
    it("should decode a message", () => {
      const input = "qwerty"
      const alphabet = "qwertyuiopasdfghjklzxcvbnm"
      const expected = "abcdef"
         const actual = substitution(input, alphabet)
    })
    it("should decode with any unique characters in its key", () => {
      const input = "*&#%$@"
      const alphabet = "*&#%$@uiopasdfghjklzxcvbnm"
      const expected = "qwerty"
         const actual = substitution(input, alphabet)
    })
    it("should preserve spaces when decoding", () =>{
          const input = "qwe rty"
      const alphabet = "qwertyuiopasdfghjklzxcvbnm"
      const expected = "abc def"
         const actual = substitution(input, alphabet)
    })
    
  })
  
}
)