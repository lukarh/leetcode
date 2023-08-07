/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    var numVowels = 0
    var vowels = 'aeiou'

    for (let i=0; i<k; i++) {
        char = s[i]
        if (vowels.includes(char)) {
            numVowels += 1
        }
    }

    // check if input string equals k, means we already iterated through entire string
    // or if found the max number of vowels possible, which is k itself
    if ((numVowels === k) || (s.length === k)) {
        return numVowels
    }

    var maxVowels = numVowels

    for (let i=k; i<s.length; i++) {
        var newChar = s[i]
        var oldChar = s[i-k]
        numVowels += vowels.includes(oldChar) ? -1 : 0
        numVowels += vowels.includes(newChar) ? 1 : 0

        if (numVowels > maxVowels) {
            maxVowels = numVowels
        }

        if (numVowels === k) {
            return maxVowels
        }
    }
    
    return maxVowels
};