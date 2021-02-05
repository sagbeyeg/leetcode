// Question 3
// Determine if the sum of two integers is equal to the given value
// Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists and return false if it does not. Consider this array and the target sums:
// [5,7,1,2,8,4,3]
// Target Sum = 10 -  7+3=10, 2+8=10
// Target Sum = 19 -  No 2 values sum up to 19

const integerSums = (array, value) => {
  //iterate through array
  for (i=0; i< array.length; i++){
    let response = false
    //value - array[i] = numINeed
    let numINeed = value - array[i]
    // console.log(numINeed)
    //iterate again to find said value
    for (i=0; i< array.length; i++) {
      if (array[i] === numINeed){
        return true
      }
    }
    return response
  }
}

// const equalSum = (array, value) => {
  //   let response = false
  
  //   for(i=0; i < array.length; i++) {
  //     let otherVal = value - array[i] 
  //     console.log(otherVal)
  //     if (array.includes(otherVal){
  //       response = true
  //     } 
  //   }
  //   return response
  // }

//TEST
console.log(integerSums([5,7,1,2,8,4,3], 10))
