class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        # edge case
        if len(s) == 1:
            return s

        # else case
        longestPalindrome = s[0]

        for i in range(len(s)-1):
            j = len(s)
            # substring we check has to be of length two or above
            while j > i:
                substring = s[i:j]
                # stop 2nd pointer from moving down if longestPalindrome was found preivously
                if len(substring) < len(longestPalindrome):
                    break

                # check if substring reversed == string, therefore palindrome 
                if substring == substring[::-1] and len(substring) != 1:
                    if len(substring) > len(longestPalindrome):
                        longestPalindrome = substring
                j -= 1

        # otherwise longest palindrome is just one character long, return first character of string
        return longestPalindrome
