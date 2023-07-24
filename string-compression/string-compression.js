// idk why but it's faster in javascript, 61ms and beats 91% of the users

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars.length == 1) {
        return chars.length
    } else {
        var s = ""
        var currentLetter = chars[0]
        var count = 1
        
        for (let i=1; i < chars.length; i++) {
            var letter = chars[i]

            if (letter !== currentLetter) {
                if (count !== 1) {
                    s += currentLetter
                    s += count.toString()
                } else {
                    s += currentLetter
                }
                currentLetter = letter
                count = 1

            } else {
                count += 1
            }
        }

        s += currentLetter
        s += (count !== 1) ? count.toString() : ""

        for (let i=0; i < chars.length; i++) {
            chars[i] = s[i]
        }

        return s.length
    }
};