// Method-1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  if (nums.length == 2) {
    return [0, 1];
  }
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.indexOf(target - nums[i]) != -1 &&
      nums.indexOf(target - nums[i]) != i
    ) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
};

// Method-2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  var results = [];
  // try sums:  0,1 0,2 0,3  1,2 1,3  2,3
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        results.push(i);
        results.push(j);
        return results;
      }
    }
  }
};

// Method-3

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function (nums, target) {
  let dic = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in dic) {
      return [dic[target - nums[i]], i];
    }
    dic[nums[i]] = i;
  }
};
