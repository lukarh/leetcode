class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
        gcd = ""

        for letter1, letter2 in zip(str1, str2):
            if letter1 == letter2:
                gcd += letter1
                    
            else:
                break

        if gcd == "":
            return gcd

        for i in range(len(gcd)-1, -1, -1):
            if (((gcd * (len(str1) // len(gcd))) == str1) and 
                  ((gcd * (len(str2) // len(gcd))) == str2)):
                  return gcd
            else:
                gcd = gcd[:i]
        
        return gcd
