```javascript
function myFunction(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // This will cause an error if a or b is not a number
}

console.log(myFunction(5, 'hello')); //This will cause an error
```