// Write your tests here!
//it should return a string
//if decoding the string should be even
//or return false
//number of spaces should remain through encoding and decoding
//ignore capital letters
//i and j share a space but should somehow be differentiated
//if decoding 
    
    const {expect} = require('chai');
    const polybius = require('../src/polybius');
    
    describe("polybius", () => {
        it("should return a string", () => {
            const actual = polybius("");
            const expected = "";
    
            expect(actual).to.equal(expected);
        });
    
        it("if decoding, should return false if characters not even", () => {
            const actual = polybius('123 3456', false);
            
            expect(actual).to.be.false;
        });
    
        it("should maintain proper spacing for decoding", () => {
            const actual = polybius('311144 321144', false);
            const expected = 7;
    
            expect(actual.length).to.equal(expected);
        });
    
        it("i and j share a value key of 42 and both are shown", () => {
            const actual = polybius('4252', false);
            const expected = '(i/j)k';
    
            expect(actual).to.equal(expected);
        });
    
        it("ignores capital letters", () => {
            const actual = polybius('Monkey hat', true);
            const expected = '234333525145 321144'
    
            expect(actual).to.equal(expected);
        })
    
        it("encodes a sentence correctly", () => {
            const actual = polybius('the hat was on the cat', true);
            const expected = '443251 321144 251134 4333 443251 311144'
    
            expect(actual).to.equal(expected);
        })
        it("it encodes both i and j with a 42", () => {
            const actual = polybius('if jinxed just jump', true);
            const expected = '4212 424233355141 42543444 42542353'
    
            expect(actual).to.equal(expected);
        })
        it("maintains the original sentence's spaces in the encoding", () => {
            const actual = polybius('s uppose you s paced w rongly', true);
            const expected = '34 545353433451 454354 34 5311315141 25 244333221345'
    
            expect(actual).to.equal(expected);
        })
    } )



        