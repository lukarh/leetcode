class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
        def checkValidFlowerbed(i, flowerbed, possibleN):
            if ((i != 0) and (i != len(flowerbed)-1)):
                if ((flowerbed[i-1] != 1) and (flowerbed[i+1] != 1)):
                    flowerbed[i] = 1
                    possibleN += 1
                    return possibleN
            elif (i == 0):
                if flowerbed[i+1] != 1:
                    flowerbed[i] = 1
                    possibleN += 1
                    return possibleN
            else:
                if flowerbed[i-1] != 1:
                    flowerbed[i] = 1
                    possibleN += 1
                    return possibleN
            return possibleN
        
        if len(flowerbed) == 1:
            if flowerbed[0] == 1:
                return 0 == n
            else:
                return 1 >= n
        
        possibleN = 0

        for i in range(len(flowerbed)):
            if (flowerbed[i] != 1):
                possibleN = checkValidFlowerbed(i, flowerbed, possibleN)
            else:
                continue

        return possibleN >= n
    

### HOW THIS CAN BE BETTER
# ADD ZEROS IN FRONT OF THE ARRAY AND AT THE END OF THE ARRAY, ITERATE FROM 1st to 2nd last element and check if valid flowerbled

class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
        
        possibleN = 0
        f = [0] + flowerbed + [0]

        for i in range(1, len(f)-1):
            if (f[i] == 0) and (f[i+1] == 0) and (f[i-1] == 0):
                f[i] = 1
                possibleN += 1
            else:
                continue

        return possibleN >= n