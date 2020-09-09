// Run on console (ES6 Supported)

function isBalanced(str) {

  if (str.length <= 1)
    return false

  let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    ch = str[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return "NO"
      }
    } else {
      stack.push(ch)
    }
  }

  return "YES"
  
};

// Example
console.log(isBalanced("([)]")) // "NO"
console.log(isBalanced("()")) // "YES"
console.log(isBalanced("{}[]()")) // "YES"
console.log(isBalanced("{[}]")) // "NO"
console.log(isBalanced("{[}]")) // "NO"