let a = "I am new to JavaScript";

// Length of the string
console.log(a.length); // 23

// Character at a specific index
console.log(a.charAt(5)); // 'e'

// Unicode of the character at a specific index
console.log(a.charCodeAt(5)); // 101 -- ASCII value

// Get substring from index to end
console.log(a.substring(5)); // 'ew to JavaScript'

// Get substring from start to end (not including end)
console.log(a.substring(2, 7)); // 'am ne'

// Get part of string using slice (supports negative indices)
console.log(a.slice(5, 8)); // 'ew '
console.log(a.slice(-10)); // 'JavaScript'

// Check if string includes a substring
console.log(a.includes("Java")); // true

// Check if string starts with a substring
console.log(a.startsWith("I am")); // true

// Check if string ends with a substring
console.log(a.endsWith("Script")); // true

// Find the index of a substring
console.log(a.indexOf("new")); // 5

// Find the last index of a substring
console.log(a.lastIndexOf("a")); // 18

// Convert to upper case
console.log(a.toUpperCase()); // 'I AM NEW TO JAVASCRIPT'

// Convert to lower case
console.log(a.toLowerCase()); // 'i am new to javascript'

// Replace a substring with another
console.log(a.replace("JavaScript", "JS")); // 'I am new to JS'

// Replace all occurrences of a substring (ES2021+)
console.log(a.replaceAll("a", "@")); // 'I @m new to J@v@Script'

// Split the string into an array
console.log(a.split(" ")); // ['I', 'am', 'new', 'to', 'JavaScript']

// Trim whitespace from both ends
let b = "   Hello World!   ";
console.log(b.trim()); // 'Hello World!'

// Repeat the string
console.log(a.repeat(2)); // 'I am new to JavaScriptI am new to JavaScript'

// Pad the start of the string
console.log(a.padStart(30, '*')); // '*******I am new to JavaScript'

// Pad the end of the string
console.log(a.padEnd(30, '*')); // 'I am new to JavaScript*******'

// Match a substring using regex
console.log(a.match(/new/)); // [ 'new', index: 5, ... ]

// Search for a substring using regex
console.log(a.search(/Java/)); // 11

// Concatenate strings
console.log(a.concat("!", " Welcome!")); // 'I am new to JavaScript! Welcome!'

// Access character using bracket notation
console.log(a[0]); // 'I'