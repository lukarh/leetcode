# not the fastest solution

class Solution(object):
    def compress(self, chars):
        """
        :type chars: List[str]
        :rtype: int
        """

        # edge case if input array size is one
        if len(chars) == 1:
            return len(chars)

        # else, array size is greater than one
        s = ""
        currentLetter, count = chars[0], 1

        # iterate through array
        for i in range(1, len(chars)):
            char = chars[i]

            if char != currentLetter:
                if count == 1:
                    s += currentLetter
                else:
                    s += currentLetter
                    s += str(count)
                currentLetter = char
                count = 1
            else:
                count += 1

        # last group of characters needs to be appended
        s += currentLetter
        s += str(count) if count > 1 else ''

        # modify input array
        for i in range(len(s)):
            chars[i] = s[i]

        return len(s)