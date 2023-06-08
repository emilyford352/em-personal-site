// 1. Compare 2 strings, only looking at a subset of characters
//
// Input: "ab", "XaYbZ", ["a", "b"] - these strings are equal
// Input: "ab", "XaYbZ", ["a", "b", "X"] - not equal
//
// function stringsEqualWithSubset(str1, str2, charSet) {
// }



// 4. Write a function to check whether a string with grouping characters is "balanced"
//
// "()" => Balanced
// "([]{})" => Balanced
// "abc)1213(" => Not Balanced
// "abc(123{xyz)}" => Not Balanced
//
// (){}[]<>
//
// 4b:
//
//     ("") => Balanced
// abc(123"{xyz)}") => Balanced
// abc(")" => Not Balanced

const balanced = (str) => {
    const arr = str.split('');
    const openBracketsLength = arr.filter((item) => item === '[').length;
    const closeBracketsLength = arr.filter((item) => item === ']').length;
    const openCurlyBracketsLength = arr.filter((item) => item === '{').length;
    const closeCurlyBracketsLength = arr.filter((item) => item === '}').length;
    const openCurvedBracketsLength = arr.filter((item) => item === '(').length;
    const closedCurvedBracketsLength = arr.filter((item) => item === ')').length;
    const quotesLength = arr.filter(item => item === '"').length;
    const quotesUnbalanced = quotesLength % 2 === 0;

    console.log(openCurvedBracketsLength, closedCurvedBracketsLength)

    if (
        openBracketsLength !== closeBracketsLength ||
        openCurlyBracketsLength !== closeCurlyBracketsLength ||
        openCurvedBracketsLength !== closedCurvedBracketsLength ||
        !quotesUnbalanced
    ) {
        return 'Not Balanced';
    }

    return 'Balanced';
}

console.log(balanced('"()" =>'))
console.log(balanced('abc(123{xyz)}'))
