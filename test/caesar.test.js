const {expect} = require("chai");
const{caesar} = require("../src/caesar")


describe("caesar", () => {
  describe("handling errors", () => {
  it("should return false if the shift is 0", () => {
        const input = "something"
        const shift = 0
        const expected = false
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
        
        
        
           })


        it("should return false if the shift is greater than 25", () => {
        const input = "something"
        const shift = 26
        const expected = false
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
        
        
        
           })


        it("should return false if the shift is less than negative 25", () => {
        const input = "something"
        const shift = -26
        const expected = false
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
        
        
        })
           })

describe("encoding", () => {
        it("should encode a message by changing the letter by the value of shift", () => {
        const input = "something"
        const shift = 1
        const expected = "tpnfuijoh"
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
        
        
        
           })


        it("should leave spaces intact in the encoded message", () => {
        const input = "something something"
        const shift = 1
        const expected = "tpnfuijoh tpnfuijoh"
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
        
        
        
           })


        it("should ignore capital letters in the input", () => {
        const input = "SomeThing"
        const shift = 1
        const expected = "tpnfuijoh"
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
        
        
        
           })

        it("should allow for a negative shift", () => {
        const input = "something"
        const shift = -25
        const expected = "tpnfuijoh"
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
        
        
        
           })

        it("should deal with letters at the end of the alphabet", () => {
        const input = "xyz"
        const shift = 3
        const expected = "abc"
        const actual = caesar(input, shift)
        expect(actual).to.equal(expected)
        
        
        })
           })

describe("decoding", () => {
        it("should decode a message by shifting negatively", () => {
        const input = "tpnfuijoh"
        const shift = 1
        const expected = "something"
        const actual = caesar(input, shift, encode = false)
        expect(actual).to.equal(expected)
        
        
        
           })


        it("should leave spaces when decoding", () => {
        const input = "tpnfuijoh tpnfuijoh"
        const shift = 1
        const expected = "something something"
        const actual = caesar(input, shift, encode = false)
        expect(actual).to.equal(expected)
        
        

           })

        it("should lowercase everything when decoding", () => {
        const input = "TPNFUIJOH"
        const shift = 1
        const expected = "something"
        const actual = caesar(input, shift, encode = false)
        expect(actual).to.equal(expected)
        
        
        
           })

        it("should handle letters at the end of the alphabet when decoding", () => {
        const input = "xyz"
        const shift = -3
        const expected = "abc"
        const actual = caesar(input, shift, encode = false)
        expect(actual).to.equal(expected)
        
        
     
           })


        it("should handle a negative shift when decoding", () => {
        const input = "xyz"
        const shift = -3
        const expected = "abc"
        const actual = caesar(input, shift, encode = false)
        expect(actual).to.equal(expected)
        
        
        })
           })
})
