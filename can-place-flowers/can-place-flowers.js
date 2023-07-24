/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var f = [0, ...flowerbed, 0]
    var possibleN = 0

    for (let i=1; i < f.length-1; i++) {
        if ((f[i] == 0) && (f[i+1] == 0) && (f[i-1] == 0)) {
            possibleN += 1
            f[i] = 1
        } else {
            continue
        }
    }

    return possibleN >= n
};