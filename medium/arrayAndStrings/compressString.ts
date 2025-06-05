function compress(chars: string[]): number {
    let currentChar: string = chars[0];
    let currentCount: number = 1;

    let i: number = 1;

    while (i < chars.length) {
        const char: string = chars[i]; // character in the array we're on

        if (char !== currentChar) {
            if (currentCount !== 1) {
                const insertChars = currentCount.toString().split("")

                chars.splice(i, 0, ...insertChars);
                i+= insertChars.length;
            }

            currentChar = char;
            currentCount = 1;
            i++;
        } else if (char === currentChar) {
            currentCount++;
            chars.splice(i, 1); // remove element at index
            // don't increment i by 1 here because we removed at element
        }
    }

    if (currentCount !== 1) {
        chars.push(...currentCount.toString().split(""))
    }

    return chars.length;
};