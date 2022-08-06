#!/usr/bin/env node
// The line above just for compiling the file to be standalone executable

function convertToRoman(num) {
    // Make list of roman numeral and its corresponding in arabic numbers
    let numList = [
        {roman: "M", arabic: 1000},
        {roman: "CM", arabic: 900},
        {roman: "D", arabic:  500},
        {roman: "CD", arabic: 400},
        {roman: "C", arabic:  100},
        {roman: "XC", arabic:  90},
        {roman: "L", arabic:   50},
        {roman: "XL", arabic:  40},
        {roman: "X", arabic:   10},
        {roman: "IX", arabic:   9},
        {roman: "V", arabic:    5},
        {roman: "IV", arabic:   4},
        {roman: "I", arabic:    1}
    ];
    // Make variable for result
    let result = "";
    // Copy num
    let newNum = num;
    // get the length of numList
    let listLen = numList.length;
    while (newNum > 0) {
        for (let i = 0; i < listLen; i++) {
            while ((newNum - parseInt(numList[i].arabic, 10) >= 0)) {
                result += numList[i].roman;
                newNum -= parseInt(numList[i].arabic, 10);
            }
        }
    }
    return result;
}

// Tests
// console.log(`should return the string II.        returning => `, convertToRoman(2));
// console.log(`should return the string XII.       returning => `, convertToRoman(12));
// console.log(`should return the string XXXVI.     returning => `, convertToRoman(36));
// console.log(`should return the string XLV.       returning => `, convertToRoman(45));
// console.log(`should return the string XCIX.      returning => `, convertToRoman(99));
// console.log(`should return the string MIV.       returning => `, convertToRoman(1004));
// console.log(`should return the string MVI.       returning => `, convertToRoman(1006));
// console.log(`should return the string MXXIII.    returning => `, convertToRoman(1023));
// console.log(`should return the string MMXIV.     returning => `, convertToRoman(2014));
// console.log(`should return the string MMMCMXCIX. returning => `, convertToRoman(3999));



