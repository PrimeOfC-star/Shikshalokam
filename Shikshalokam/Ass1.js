function print_shortest_substrings(s, x) {
    let shortestSubstrings = [];
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i + x - 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                let substring = s.substring(i, j + 1);
                if (substring.length >= x) {
                    shortestSubstrings.push(substring);
                    break;
                }
            }
        }
    }

    if (shortestSubstrings.length > 0) {
        console.log(shortestSubstrings.join(' '));
    } else {
        console.log("not-found");
    }
}

// Example usage
let s = "abccdbacca";

let x = 3;
console.log("x =", x);
print_shortest_substrings(s, x);

x = 4;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 5;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 6;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 7;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 8;
console.log("\nx =", x);
print_shortest_substrings(s, x);
