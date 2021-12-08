const {
   Add,
   INPUT_ENDS_WITH_SEPARATOR_ERROR_MESSAGE,
   STRING_INPUT_REQUIRED_ERROR_MESSAGE,
} = require("./stringCalculator");

describe("Add", () => {
   describe("when not given a string as input", () => {
      it("should throw an error", () => {
         expect(() => Add()).toThrow(STRING_INPUT_REQUIRED_ERROR_MESSAGE);
         expect(() => Add(1)).toThrow(STRING_INPUT_REQUIRED_ERROR_MESSAGE);
      });
   });

   it("should return a number", () => {
      expect(typeof Add("")).toBe("number");
   });

   describe("when the input is an empty string", () => {
      it("should return 0", () => {
         expect(Add("")).toBe(0);
      });
   });

   describe("when the input is a single number", () => {
      it("should return that number", () => {
         expect(Add("0")).toBe(0);
         expect(Add("1")).toBe(1);
         expect(Add("99")).toBe(99);
         expect(Add("-99")).toBe(-99);
      });
   });

   describe("when the input is two numbers", () => {
      it("should return their sum", () => {
         expect(Add("0,1")).toBe(1);
         expect(Add("0,10")).toBe(10);
         expect(Add("1,99")).toBe(100);
         expect(Add("-99,99")).toBe(0);
      });
   });

   describe("when the input is more than two numbers", () => {
      it("should return their sum", () => {
         expect(Add("0,1,2")).toBe(3);
         expect(Add("0,1,2,3,4")).toBe(10);
      });
   });

   describe("when the input numbers are separated by a newline", () => {
      it("should return their sum", () => {
         expect(Add("0\n1")).toBe(1);
      });
   });

   describe("when the input numbers are separated by commas and newlines", () => {
      it("should return their sum", () => {
         expect(Add("0\n1,2\n3")).toBe(6);
      });
   });

   describe("when there is a separator at the end of the input", () => {
      it("should throw an error", () => {
         expect(() => Add(",")).toThrow(
            INPUT_ENDS_WITH_SEPARATOR_ERROR_MESSAGE
         );
         expect(() => Add("\n")).toThrow(
            INPUT_ENDS_WITH_SEPARATOR_ERROR_MESSAGE
         );
         expect(() => Add("0,")).toThrow(
            INPUT_ENDS_WITH_SEPARATOR_ERROR_MESSAGE
         );
         expect(() => Add("0\n")).toThrow(
            INPUT_ENDS_WITH_SEPARATOR_ERROR_MESSAGE
         );
         expect(() => Add("0,1,")).toThrow(
            INPUT_ENDS_WITH_SEPARATOR_ERROR_MESSAGE
         );
         expect(() => Add("0,1\n")).toThrow(
            INPUT_ENDS_WITH_SEPARATOR_ERROR_MESSAGE
         );
      });
   });

   describe("when a delimiter is defined in the input", () => {
      it("should throw an error when that delimeter is at the end of the input", () => {
         expect(() => Add("//;\n0;1;")).toThrow();
      });

      it("should return the sum of numbers", () => {
         expect(Add("//;\n0;1")).toBe(1);
         expect(Add("//|\n0|1")).toBe(1);
         expect(Add("//|\n0|1|2|99")).toBe(102);
      });

      it("should throw an error if another delimiter is used", () => {
         expect(() => Add("//;\n1,3")).toThrow(
            "';' expected but ',' found at position 1"
         );
      });
   });
});
