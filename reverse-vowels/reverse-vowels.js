/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var sArray = [...s]
    const vowelIndexes = []

    for (let i=0; i < sArray.length; i++) {
        var letter = sArray[i]
        if ('AEIOUaeiou'.includes(letter)) {
            vowelIndexes.push(i)
        }
    }

    if (vowelIndexes.length === 1 || vowelIndexes.length === 0) {
        return s
    } 

    for (let i=0; i < parseInt(vowelIndexes.length / 2); i++) {
        var vowelIndex = vowelIndexes[i]
        console.log(-i-1)
        var vowelIndex2 = vowelIndexes[vowelIndexes.length-1-i]

        var tempVowel = sArray[vowelIndex]

        console.log(tempVowel, vowelIndex, vowelIndex2)
        sArray[vowelIndex] = sArray[vowelIndex2]
        sArray[vowelIndex2] = tempVowel 
    }

    return sArray.join('')
};