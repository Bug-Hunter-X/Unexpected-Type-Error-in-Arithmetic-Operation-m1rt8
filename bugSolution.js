```javascript
function myFunction(a, b) {
  //Type checking and handling
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle null or non-numeric values
  }
  return a + b; 
}

console.log(myFunction(5, 'hello')); // Output: 0
console.log(myFunction(5, 10)); // Output: 15
```