/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var truthValues = []

    const maxCandies = Math.max(...candies)

    for (const candy of candies) {
        if (candy + extraCandies >= maxCandies) {
            truthValues.push(true)
        } else {
            truthValues.push(false)
        }
    }

    return truthValues
};