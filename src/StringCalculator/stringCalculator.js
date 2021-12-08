const STRING_INPUT_REQUIRED_ERROR_MESSAGE = "Add required a string as input.";
const INPUT_ENDS_WITH_DELIMETER_ERROR_MESSAGE = "Cannot end the input with a delimeter.";

const getDelimeterAndNumbers = (numbers) => {
    const [ delim, nums ] = inputTokensWhenUserDefinesADelimeter = 
        numbers.substring(2, numbers.length).split("\n");
    return { delimeter: delim, numbers: nums };
};

const differentDelimeterUsedInNumbers = (delim, nums) => {
    return nums.match(/[\D]/) && !nums.includes(delim)
};

let delimeters = [",", "\n"];

const Add = (numbers) => {
    if (typeof numbers !== "string") 
        throw STRING_INPUT_REQUIRED_ERROR_MESSAGE;
    if (numbers === "") return 0;

    const delimeterIsUserDefined = numbers.substring(0, 2) === "//";
    if (delimeterIsUserDefined) {
        const delimeterAndNumbers = getDelimeterAndNumbers(numbers);
        delimeters = [delimeterAndNumbers.delimeter];
        numbers = delimeterAndNumbers.numbers;
        if (differentDelimeterUsedInNumbers(delimeters[0], numbers)) throw "";
    }

    console.log({ lastChar: numbers.slice(-1), delimeters })

    if (delimeters.includes(numbers.slice(-1))) {
        throw INPUT_ENDS_WITH_DELIMETER_ERROR_MESSAGE;
    }

    const numberTokensAsStrings = numbers.split(delimeters[0]);
    const numberIntTokens = numberTokensAsStrings.map(n => parseInt(n));
    return numberIntTokens.reduce((prev, curr) => prev + curr, 0);
};

module.exports = {
    Add,
}