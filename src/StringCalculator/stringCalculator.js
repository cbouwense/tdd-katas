const STRING_INPUT_REQUIRED_ERROR_MESSAGE = "Add required a string as input.";
const INPUT_ENDS_WITH_DELIMETER_ERROR_MESSAGE =
   "Cannot end the input with a delimeter.";

const getDelimeterAndNumbers = (numbers) => {
   const [delim, nums] = (inputTokensWhenUserDefinesADelimeter = numbers
      .substring(2, numbers.length)
      .split("\n"));
   return { delimeter: delim, numbers: nums };
};

const differentDelimeterUsedInNumbers = (delim, nums) => {
   return nums.match(/[\D]/) && !nums.includes(delim);
};

let delimeters = [",", "\n"];

const Add = (numbers) => {
   if (typeof numbers !== "string") throw STRING_INPUT_REQUIRED_ERROR_MESSAGE;
   if (numbers === "") return 0;

   const delimeterIsUserDefined = numbers.substring(0, 2) === "//";
   if (delimeterIsUserDefined) {
      const delimeterAndNumbers = getDelimeterAndNumbers(numbers);
      delimeters = [delimeterAndNumbers.delimeter];
      numbers = delimeterAndNumbers.numbers;
      if (differentDelimeterUsedInNumbers(delimeters[0], numbers)) throw "";
   }

   if (delimeters.includes(numbers.slice(-1)))
      throw INPUT_ENDS_WITH_DELIMETER_ERROR_MESSAGE;

   let numberTokensAsStrings = [];
   let i = 0;
   let j = 1;
   for (; j <= numbers.length; j++) {
      // If the current character we are looking at is a delimeter:
      if (delimeters.includes(numbers.charAt(j))) {
         numberTokensAsStrings.push(numbers.substring(i, j));
         i = j + 1;
         j = i;
      }
      // If we catch something that isn't a number and the user has defined
      // their own delimeter, treat it as an invalid delimeter.
      if (delimeterIsUserDefined && parseInt(numbers.charAt(j)) === NaN) {
         throw `'${delimeters[0]}' expected but '${numbers.charAt(
            j
         )}' found at position ${j}`;
      }
   }
   numberTokensAsStrings.push(numbers.substring(i, j));

   const numberIntTokens = numberTokensAsStrings.map((n) => parseInt(n));
   return numberIntTokens.reduce((prev, curr) => prev + curr, 0);
};

module.exports = {
   Add,
};
