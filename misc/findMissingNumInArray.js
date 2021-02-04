// Question 2
//  Find the missing number in the array
// You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number x. You have to find x. The input array is not sorted. Look at the below array and give it a try.
// [3,7,1,2,8,4,5]
// n = 8 missing number = 6

// const findMissing = array => {
//   //create a var for current num
//   let currentNumber = 1
//   //sort my numbers
//   let sortedArray = array.sort()
//   console.log(sortedArray)
//   //iterate through sortedArray checking that the index+1 = number
//   for (i = 0; i < sortedArray.length; i++) {
//     //if not set as missing num
//     if (sortedArray[i] === currentNumber)  currentNumber++ 
//     else return sortedArray[i] - 1
//   }
// }

const findMissing = array => {
  let currentNumber = 1
  let sortedArray = array.sort()
  for (i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === currentNumber)  currentNumber++ 
    else return sortedArray[i] - 1
  }
}

console.log(findMissing([3,7,1,2,8,4,5]))