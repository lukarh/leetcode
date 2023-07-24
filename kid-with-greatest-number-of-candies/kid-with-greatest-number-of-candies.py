class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """ 
        truthValues = []
        maxCandies = max(candies)
        for candy in candies:
            if candy + extraCandies >= maxCandies:
                truthValues.append(True)
            else:
                truthValues.append(False)

        return truthValues