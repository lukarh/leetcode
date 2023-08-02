class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if (s == t) or (s == ''):
            return True

        elif len(s) == 1:
            if s in t:
                return True
            return False

        else:
            sIndex = 0
            for tIndex in range(len(t)):
                print(sIndex)
                tChar = t[tIndex]
                sChar = s[sIndex]
                if sChar == tChar:
                    sIndex += 1
                if sIndex == len(s):
                    return True

            return False


