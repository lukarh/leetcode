/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = Array(nums.length).fill(1)

    var prefix = 1
    for (let i=0; i<nums.length; i++) {
        result[i] *= prefix
        prefix *= nums[i]
    }

    var postfix = 1
    for (let i=nums.length-1; -1<i; i--) {
        result[i] *= postfix
        postfix *= nums[i]
    }

    return result
};