/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    i = 0
    for (const char of s) {
        var newIndex = t.slice(i,t.length).indexOf(char)
        if (newIndex === -1) {
            return false
        }
        i = i + newIndex + 1
    }
    return true
};