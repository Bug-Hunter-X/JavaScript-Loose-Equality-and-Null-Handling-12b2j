function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }

  // ... rest of the function using strict equality
  return a === b; // Use strict equality
}

console.log(foo(null, 0)); // Output: null
console.log(foo(0, null)); // Output: null
console.log(foo(0, 0));     // Output: true
console.log(foo(0, '0'));   // Output: false //Strict Equality handles different types correctly
console.log(foo(null, undefined)); // Output: null