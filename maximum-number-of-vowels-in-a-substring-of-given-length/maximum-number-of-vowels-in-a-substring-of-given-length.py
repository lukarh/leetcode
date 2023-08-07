class Solution(object):
    def maxVowels(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        vowels = 'aeiou'
        numVowels = 0

        # count number of vowels in initial substring
        for char in s[:k]:
            if char in vowels:
                numVowels += 1
            
        # return number of vowels if we already tested the entire string 
        # or if we've reached max num of vowels
        if (numVowels == k) or (len(s) == k):
            return numVowels

        maxVowels = numVowels

        # sliding window of substring
        for i in range(k, len(s)):
            newChar = s[i]
            oldChar = s[i-k]
            numVowels += 1 if newChar in vowels else 0
            numVowels += -1 if oldChar in vowels else 0     

            if numVowels > maxVowels:
                maxVowels = numVowels

            if numVowels == k:
                return numVowels

        return maxVowels
