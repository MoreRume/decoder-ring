const expect = require("chai").expect;
const {polybius} = require("../src/polybius")

describe("polybius", () =>{
  
  describe("encoding", () =>{
    it("should encode a message, turning letters to number pairs", () =>{
      const input = "hello"
      const expected = "3251131343"
      const actual = polybius(input)
      expect(actual).to.equal(expected)
    })
    it("should handle i and j as both 42", () =>{
      const input = "ijij"
      const expected = "42424242"
      const actual = polybius(input)
      expect(actual).to.equal(expected)
    })
    it("should preserve spaces in the message",() => {
      const input = "am here"
      const expected = "1123 32512451"
      const actual = polybius(input)
      expect(actual).to.equal(expected)
    })
  })
  
  describe("decoding", () => {
    
    it("should decode by turning pairs of numbers into letters", () => {
      const input = "3251131343"
      const expected = "hello"
      const actual = polybius(input, encode = false)
      expect(actual).to.equal(expected)
    })
    it("should translate 42 to i/j",() =>{
      const input = "42"
      const expected = "i/j"
      const actual = polybius(input, encode = false)
      expect(actual).to.equal(expected)
    })
    it("should maintain spaces while decoding", () => {
      const input = "1123 32512451"
      const expected = "am here"
      const actual = polybius(input, encode = false)
      expect(actual).to.equal(expected)
    })
    it("should return false if the length of input is odd while decoding", () => {
      const input = "1234567"
      const expected = false
      const actual = polybius(input, encode = false)
      expect(actual).to.equal(expected)
    })
  })
})
