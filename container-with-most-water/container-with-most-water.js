/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxArea = 0

    var left = 0
    var right = height.length-1

    while (left < right) {
        var width = right - left
        var leftHeight = height[left]
        var rightHeight = height[right]

        var testArea = (leftHeight > rightHeight) ? rightHeight * width : leftHeight * width

        if (testArea > maxArea) {
            maxArea = testArea
        }

        if (leftHeight > rightHeight) {
            right -= 1
        } else if (leftHeight <= rightHeight) {
            left += 1
        }
    }

    return maxArea
};