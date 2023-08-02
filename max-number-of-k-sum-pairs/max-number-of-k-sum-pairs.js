/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    var numMap = {}

    for (const num of nums) {
        if (num in numMap) {
            numMap[num] += 1
        } else {
            numMap[num] = 1
        }
    }

    var numOperations = 0
    var seenNums = new Set()

    for (const num of nums) {
        var otherNum = k - num
        
        if (!seenNums.has(num) && numMap.hasOwnProperty(otherNum)) {
            if (otherNum === num) {
                numOperations += Math.floor(numMap[num] / 2)
            } else {
                numOperations += Math.min(numMap[num], numMap[otherNum])
            }
            seenNums.add(num)
            seenNums.add(otherNum)
        }
    }

    return numOperations
};