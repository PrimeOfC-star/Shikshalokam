function transformString(s) {
    const result = Array.from(s, char => char.charCodeAt(0));
    const marked = new Array(s.length).fill(false);

    for (let i = 0; i < s.length; i++) {
        if (i === 0 && result[i] % 2 === 0 && !marked[i + 1]) {
            const nextCharCode = result[i + 1];
            if ((nextCharCode >= 65 && nextCharCode <= 90) || (nextCharCode >= 97 && nextCharCode <= 122)) {
                result[i + 1] += result[i] % 7;
                marked[i + 1] = true;
            } else {
                result[i + 1] = 83;
            }
        } else if (i > 0 && result[i] % 2 === 0 && !marked[i + 1]) {
            const nextCharCode = result[i + 1];
            if ((nextCharCode >= 65 && nextCharCode <= 90) || (nextCharCode >= 97 && nextCharCode <= 122)) {
                result[i + 1] += result[i] % 7;
                marked[i + 1] = true;
            } else {
                result[i + 1] = 83;
            }
        } else if (i > 0 && (result[i - 1] >= 65 && result[i - 1] <= 90 || (result[i - 1] >= 97 && result[i - 1] <= 122)) && !marked[i - 1]) {
            result[i - 1] -= result[i] % 5;
        } else {
            result[i - 1] = 83;
        }
    }

    const transformedString = result.map(charCode => String.fromCharCode(charCode)).join('');
    return transformedString;
}

// Example usage
const s = "sHQen}";
const transformedString = transformString(s);
console.log(`Final Answer: ${transformedString}`);
