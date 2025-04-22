// mathUtils.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};


// app.js
const math = require('./mathUtils');
console.log(math.add(2, 3));       // 5
console.log(math.subtract(5, 2));  // 3
