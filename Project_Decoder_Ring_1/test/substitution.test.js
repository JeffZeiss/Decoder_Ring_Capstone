// Write your tests here!
//1.should maintain original spaces
//2.alphabet should be 26 charactes
//3.alphabet should have a unique value for each of 26 slots or return false
//4.should ignore capital letters
//5.should correctly encode a normal sentence
//6.should correctly decode an encoded sentence
const {expect} = require('chai');
    const substitution = require('../src/substitution');
describe("substitution", () => {

    it("1.should maintain original spaces", () => {
        const actual = substitution("two words","xoyqmcgrukswaflnthdjpzibev",true);
        const expected = "jil ilhqd";

        expect(actual).to.equal(expected);
    });
    it("2a.alphabet should return false if < 26 characters", () => {
        const actual = substitution("translate","dicw;az",true);

        expect(actual).to.be.false;
    });
    it("2b.alphabet should return false if > 26 characters", () => {
        const actual = substitution("translate","abcdefghijklmnopqrstuvwxyz#%",true);

        expect(actual).to.be.false;
    });
    it("3.alphabet should have a unique value for each of 26 slots or return false", () => {
        const actual = substitution("translate","abcdeaghijklmnopqrstuvwxyz",false);

        expect(actual).to.be.false;
    });
    it("4.should ignore capital letters", () => {
        const actual = substitution("CaPitAl TeSt","abcdefghijklmnopqrstuvwxyz",false);
        const expected = "capital test";

        expect(actual).to.equal(expected);
    });
    it("5.should correctly encode a normal sentence", () => {
        const actual = substitution("to encode","abcd$fghijklmnopqrs&uvwxyz",true);
        const expected = "&o $ncod$";

        expect(actual).to.equal(expected);
    });
    it("6.should correctly decode an encoded sentence", () => {
        const actual = substitution("&o $eco$e","abc$efghijklmnopqrs&uvwxyz",false);
        const expected = "to decode";

        expect(actual).to.equal(expected);
    });
    it("7.should return false if no substitution alphabet", () => {
        const actual = substitution("translate",true);

        expect(actual).to.be.false;
    });
})