/**
 * @param {number[]} nums
 * @return {boolean}
 */

// RUN TIME IS SLOWER COMPARED TO OTHERS - ONLY BEATS 9.89% of other users

var increasingTriplet = function(nums) {
    if (nums.length <= 2) {
        return false
    } else if (new Set(nums).size <= 2) {
        return false
    } else {
        var minNum = Infinity
        for (let i=0; i < nums.length-1; i++) {
            var currentNum = nums[i]
            if (currentNum < minNum) {
                minNum = currentNum
            } else if (currentNum > minNum) {
                for (let j=i+1; j < nums.length; j++) {
                    if (nums[j] > currentNum) {
                        return true
                    }
                }
            } else {
                continue
            }
        }
        return false
    }
};