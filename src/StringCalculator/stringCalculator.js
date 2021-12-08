const STRING_INPUT_REQUIRED_ERROR_MESSAGE = "Add required a string as input.";
const MAX_NUMBERS = 2;
const MAX_NUMBERS_EXCEEDED_ERROR_MESSSAGE = "Exceeded the maximum amount of input numbers.";

const Add = (numbers) => {
    if (typeof numbers !== "string") throw STRING_INPUT_REQUIRED_ERROR_MESSAGE;
    if (numbers === "") return 0;

    const numberTokensAsStrings = numbers.split(",");
    if (numberTokensAsStrings.length > MAX_NUMBERS) throw MAX_NUMBERS_EXCEEDED_ERROR_MESSSAGE;

    const numberIntTokens = numberTokensAsStrings.map(n => parseInt(n));
    return numberIntTokens.reduce((prev, curr) => prev + curr, 0);
};

module.exports = {
    Add,
    STRING_INPUT_REQUIRED_ERROR_MESSAGE
}