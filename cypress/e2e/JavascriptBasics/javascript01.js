//Understanding const, let and var
const a = 10
let b = 20 // 'let' allows reassignment and block-scoped
var c = 30 // 'var' is function-scoped and allows reassignment

// a = 15 // This will throw an error because 'a' is a constant
b = 25 // This is valid because 'b' is declared with 'let'
c = 35 // This is valid because 'c' is declared with 'var'

console.log('Value of a:', a) // Output: Value of a: 10
console.log('Value of b:', b) // Output: Value of b: 25
console.log('Value of c:', c) // Output: Value of c: 35

//Understanding Block-Scope
if (true) {
    let blockScoped = 'I am block scoped'
    var functionScoped = 'I am function scoped'
    console.log(blockScoped) // Output: I am block scoped
    console.log(functionScoped) // Output: I am function scoped
}

// console.log(blockScoped) // This will throw an error because 'blockScoped' is not accessible here
console.log(functionScoped) // Output: I am function scoped

//Understanding Function Scope
function testFunctionScope() {
    var functionVar = 'I am function scoped'
    console.log(functionVar) // Output: I am function scoped
}

testFunctionScope()
console.log(functionVar) // This will throw an error because 'functionVar' is not accessible here

