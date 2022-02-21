// Two Sum 
// Given an array of integers, return the indices of the two number that 
// add up to a given target

// eg [1,3,7,9,2], sum = 11
// o/p [3, 4] array of indices

// inp would have all positive value, with no dupes
var twoSum = function(nums, target) {
    let res = [];
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
       let numberToFind = target - nums[i];
       if (hashMap[nums[i]] >= 0) {
          return [hashMap[nums[i]], i];
       } else {
          hashMap[numberToFind] = i;
       }
    }
  
    return null;
};