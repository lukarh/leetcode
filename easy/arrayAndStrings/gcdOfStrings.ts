export function gcdOfStrings(str1: string, str2: string): string {
  const shortestStr: string = str1.length < str2.length ? str1 : str2;

  for (let i = shortestStr.length; i > 0; i--) {
    const substring: string = shortestStr.slice(0, i);

    const str1Factor = Math.floor(str1.length / substring.length);
    const str2Factor = Math.floor(str2.length / substring.length);

    const isStr1GCD = substring.repeat(str1Factor) === str1;
    const isStr2GCD = substring.repeat(str2Factor) === str2;

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

export function gcdOfStringsFast(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

  const lengthGCD = gcd(str1.length, str2.length);
  return str1.slice(0, lengthGCD);
}
