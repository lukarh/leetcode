/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var result = ""
    if (word1.length > word2.length) {
        for (let i = 0; i < word2.length; i++) {
            result += word1[i]
            result += word2[i]
        }
        result += word1.slice(word2.length)
        return result
    } else if (word2.length > word1.length) {
        for (let i = 0; i < word1.length; i++) {
            result += word1[i]
            result += word2[i]
        }
        result += word2.slice(word1.length)
        return result
    } else {
        for (let i = 0; i < word1.length; i++) {
            result += word1[i]
            result += word2[i]
        }
        return result
    }
};