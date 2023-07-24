class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        # edge case if length of string is 1
        if len(s) == 1:
            return s
        # other string is length of 1 or greater
        else:
            temp_s = list(s)

            # find the vowels and keep track of index of vowels
            vowelIndexes = []
            for i in range(len(s)):
                letter = s[i]
                if letter in 'aeiouAEIOU':
                    vowelIndexes.append(i)

            if len(vowelIndexes) == 1 or len(vowelIndexes) == 0:
                return s

            # swap vowels
            for index in range(len(vowelIndexes) // 2):
                vowelIndex = vowelIndexes[index]
                vowelIndex2 = vowelIndexes[-index-1]

                tempVowel = temp_s[vowelIndex]
                temp_s[vowelIndex] = temp_s[vowelIndex2]
                temp_s[vowelIndex2] = tempVowel

            return ''.join(temp_s)