class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        maxArea = 0

        left = 0
        right = len(height)-1

        while left < right:
            width = right - left
            testArea = (height[right] * width) if height[left] >= height[right] else (height[left] * width)

            if (testArea > maxArea):
                maxArea = testArea

            if height[left] < height[right]:
                left += 1
        
            elif height[left] >= height[right]:
                right -= 1

        return maxArea