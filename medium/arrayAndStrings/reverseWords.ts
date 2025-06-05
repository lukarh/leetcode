function reverseWords(s: string): string {
  const trimmedStr: string = s.trim().replace(/\s+/g, " ");

  return trimmedStr.split(" ").reverse().join(" ");
}
