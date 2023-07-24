class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        res = [1] * len(nums)

        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]
            print(res)

        postfix = 1
        for i in range(len(nums)-1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]

        return res

        # prefix = [nums[0]]
        # postfix = [nums[-1]]
        # answer = []

        # for i in range(1, len(nums)):
        #     ## prefix operation
        #     prev_num = prefix[i-1]
        #     cur_num = nums[i]
        #     product = prev_num * cur_num
        #     prefix.append(product)

        #     ## postfix operation
        #     prev_num = prefix[0]
        #     cur_num = nums[-i-1]
        #     product = prev_num * cur_num
        #    postfix.insert(0, product)
