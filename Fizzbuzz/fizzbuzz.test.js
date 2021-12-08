const { fizzBuzz } = require("./fizzbuzz");

describe("fizzBuzz", () => {   
    it("should return a string", () => {
        expect(typeof fizzBuzz()).toBe("string");
    });
});