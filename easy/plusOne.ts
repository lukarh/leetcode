export function plusOne(digits: number[]): number[] {
  let convert: string | number = "";

  for (let i = 0; i < digits.length; i++) {
    convert += digits[i];
  }

  convert = (BigInt(convert) + 1n).toString();

  let result: number[] = [];

  for (let i = 0; i < convert.length; i++) {
    result.push(parseInt(convert[i]));
  }

  return result;
}
