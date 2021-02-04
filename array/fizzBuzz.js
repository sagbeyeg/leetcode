// FIZZ BUZZ
/**
* @param {number} n
* @return {string[]}
*/

//MY SOLUTION
var fizzBuzz = function(n) {
  let array = []
  for (i=0; i< n; i++) {
      if ((i+1) % 3 == 0 && (i+1) % 5 == 0) {
          array.push("FizzBuzz")            
      } else if ((i+1) % 5 == 0) {
          array.push("Buzz")
      } else if ((i+1) % 3 == 0) {
          array.push("Fizz")
      } else {
          array.push(`${i+1}`)
      }
  }
  return array
};

//Time complexity : O(N). Assume that N is the length of array. Each i traverses at most N steps.
// Space complexity : O(1)