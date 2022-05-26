/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
*/

const plusMinus = (arr) =>{
 const isPositive = arr.filter(el=>el >0)
 const isNegative = arr.filter(el=>el < 0)
 const isZero = arr.filter(el=>el === 0)
 console.log((isPositive.length/arr.length).toFixed(6))
 console.log((isNegative.length/arr.length).toFixed(6))
 console.log((isZero.length/arr.length).toFixed(6))
}
plusMinus([-4, 3, -9, 0, 4, 1])