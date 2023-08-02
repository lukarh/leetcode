class Solution(object):
    def maxOperations(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        if len(nums) == 1:
            return 0

        # create hash map of numbers provided in input array
        numMap = dict()
        for num in nums:
            if num not in numMap:
                numMap[num] = 1
            else:
                numMap[num] += 1

        numOperations = 0

        seen = set()

        for num in nums:
            otherNum = k-num
            if (num not in seen) and (otherNum in numMap):
                if num != otherNum:
                    numOperations += min(numMap[num], numMap[otherNum])
                else:
                    numOperations += numMap[num] // 2
                seen.add(num)
                seen.add(otherNum)

        return numOperations