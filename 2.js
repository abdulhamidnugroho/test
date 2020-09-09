// Reverses a string using a recursive function with array given
// Run in console with arr array variable;

function recursiveReverse(arr){
  if (arr.length === 0) return "";
  let s = arr.shift();
  return recursiveReverse(arr) + s;
};

// Example 
let arr = [1, 2, 3, 4];
recursiveReverse(arr);