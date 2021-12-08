const { fizzBuzz, numberRequiredErrorMessage } = require("./fizzbuzz");

describe("fizzBuzz", () => {
   it("should throw error if not given an argument", () => {
      expect(() => fizzBuzz()).toThrow(numberRequiredErrorMessage);
   });

   it("should throw error if not given a number", () => {
      expect(() => fizzBuzz("foo")).toThrow(numberRequiredErrorMessage);
   });

   it("should return a string", () => {
      expect(typeof fizzBuzz(0)).toBe("string");
   });

   it("should return the number given", () => {
      expect(fizzBuzz(1)).toBe("1");
      expect(fizzBuzz(-1)).toBe("-1");
      expect(fizzBuzz(101)).toBe("101");
   });

   describe("when the number given is a multiple of three", () => {
      it('should return "fizz"', () => {
         expect(fizzBuzz(3)).toBe("fizz");
         expect(fizzBuzz(6)).toBe("fizz");
         expect(fizzBuzz(99)).toBe("fizz");
      });
   });

   describe("when the number given is a multiple of five", () => {
      it('should return "buzz"', () => {
         expect(fizzBuzz(5)).toBe("buzz");
         expect(fizzBuzz(10)).toBe("buzz");
         expect(fizzBuzz(100)).toBe("buzz");
      });
   });

   describe("when the number given is a multiple of both three and five", () => {
      it('should return "fizzbuzz"', () => {
         expect(fizzBuzz(0)).toBe("fizzbuzz");
         expect(fizzBuzz(15)).toBe("fizzbuzz");
         expect(fizzBuzz(-15)).toBe("fizzbuzz");
      });
   });
});
