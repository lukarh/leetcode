/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    var gcd = ""
    for (let i=0; i < str1.length; i++) {
        let letterOne = str1[i]
        let letterTwo = str2[i]
        if (letterOne === letterTwo) {
            gcd += letterOne
        } else {
            break
        }
    }

    if (gcd === "") {
        return gcd
    }

    for (let i=gcd.length-1; -1 < i; i--) {

        var factorOne = parseInt(str1.length / gcd.length)
        var factorTwo = parseInt(str2.length / gcd.length)

        if (((gcd.repeat(factorOne)) === str1) && ((gcd.repeat(factorTwo)) === str2)) {
            return gcd
        } else {
            gcd = gcd.slice(0,gcd.length-1)
        }
    }

    return gcd
};