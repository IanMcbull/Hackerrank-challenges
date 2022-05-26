/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals. 
*/
/*
1 2 3
4 5 6
9 8 9

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 17. Their absolute difference is 15 - 17 = 2. 
*/

const squareMatrix = (arr) =>{
return Math.abs(arr.map((el,index)=>arr[index][index]).reduce((prev,curr)=>prev+curr) - arr.map((el,index)=>arr[index][arr.length-1 - index]).reduce((prev,curr)=>prev+curr))
}
console.log(squareMatrix([[1,2,3],[4,5,6],[9,8,9]]))