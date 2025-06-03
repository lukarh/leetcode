"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcdOfStrings = gcdOfStrings;
exports.gcdOfStringsFast = gcdOfStringsFast;
function gcdOfStrings(str1, str2) {
    var shortestStr = str1.length < str2.length ? str1 : str2;
    for (var i = shortestStr.length; i > 0; i--) {
        var substring = shortestStr.slice(0, i);
        var str1Factor = Math.floor(str1.length / substring.length);
        var str2Factor = Math.floor(str2.length / substring.length);
        var isStr1GCD = substring.repeat(str1Factor) === str1;
        var isStr2GCD = substring.repeat(str2Factor) === str2;
        if (isStr1GCD && isStr2GCD) {
            return substring;
        }
    }
    return "";
}
// what did i learn / refreshed my memory on...
// use Math.floor() to round down;
// use Math.ceil() to round up;
// use Math.round() to round nearest integer
// use Math.trunc() to remove/truncate decimals
// fastest implementation is below
function gcdOfStringsFast(str1, str2) {
    if (str1 + str2 !== str2 + str1)
        return "";
    var gcd = function (a, b) { return (b === 0 ? a : gcd(b, a % b)); };
    var lengthGCD = gcd(str1.length, str2.length);
    return str1.slice(0, lengthGCD);
}
