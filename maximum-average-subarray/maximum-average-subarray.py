class Solution(object):
    def findMaxAverage(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """
        if len(nums) == 1:
            return nums[0]
        
        # don't use subarrays => time complexity of O(n*k)

        # get sum of first k numbers
        maxSum = sum(nums[0:k])
        currentSum = maxSum

        # get new sum of next k numbers and compare the sum to previous
        for i in range(k, len(nums)):
            currentSum += nums[i] - nums[i-k]
            maxSum = max(maxSum, currentSum)

        return round(float(maxSum) / k, 5)