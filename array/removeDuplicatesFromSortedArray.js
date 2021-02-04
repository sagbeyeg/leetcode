// REMOVE DUPLICATES FROM SORTED ARRAY

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//MY SOLUTION
var removeDuplicates = function (nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      nums.splice(i, 1)
      i--
    }
  }
};

//Time complexity : O(N). Assume that N is the length of array. Each i traverses at most N steps.
// Space complexity : O(1)