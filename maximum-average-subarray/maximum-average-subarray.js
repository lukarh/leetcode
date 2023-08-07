/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length === 1) {
        return nums[0]
    } 

    var maxSum = nums.slice(0,k).reduce((total, currentNum) => total + currentNum, 0)
    var currentSum = maxSum

    for (let i=k; i<nums.length; i++) {
        currentSum += nums[i] - nums[i-k]
        maxSum = (currentSum > maxSum) ? currentSum : maxSum
    }

    return Number((maxSum / k).toFixed(5))
};