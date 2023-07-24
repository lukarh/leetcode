class Solution(object):
    def increasingTriplet(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        # if length of input is 2 or less, return False
        if len(nums) <= 2:
            return False
        # if there are only 2 or less unique numbers in the array, return False
        elif len(set(nums)) <= 2:
            return False
        else:
            # keep track of lowest number found as we iterate through array
            minNum = None

            for i in range(0, len(nums)-1):
                currentNum = nums[i]

                # if the current number is less than minNum found or no minNum exists
                if (currentNum < minNum) or (minNum is None):
                    minNum = currentNum
                # if the current number is greater than minNum found previously
                elif (currentNum > minNum):
                    for j in range(i+1, len(nums)):
                        if nums[j] > currentNum:
                            return True
                # if the current number is equal to minNum
                else:
                    continue

            return False