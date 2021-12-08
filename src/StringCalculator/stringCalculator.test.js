const { 
    Add,
    MAX_NUMBERS_EXCEEDED_ERROR_MESSSAGE,
    STRING_INPUT_REQUIRED_ERROR_MESSAGE,  
} = require("./stringCalculator");

describe("Add", () => {
    describe("when not given a string as input", () => {
        it("should throw an error", () => {
            expect(() => Add()).toThrow(STRING_INPUT_REQUIRED_ERROR_MESSAGE);
            expect(() => Add(1)).toThrow(STRING_INPUT_REQUIRED_ERROR_MESSAGE);
        });
    });

    it("should return an number", () => {
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

    describe("when the input is more than two numbers", () => {
        it("should throw an error", () => {
            expect(() => Add("0,1,2"))
                .toThrow(MAX_NUMBERS_EXCEEDED_ERROR_MESSSAGE);
            expect(() => Add("0,1,2,3"))
                .toThrow(MAX_NUMBERS_EXCEEDED_ERROR_MESSSAGE);
            expect(() => Add("0,1,2,3,4,5,6,7,8,9"))
                .toThrow(MAX_NUMBERS_EXCEEDED_ERROR_MESSSAGE);
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
});
