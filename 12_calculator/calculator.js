const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function (numbers){
  return numbers.reduce((total, number) => 
	 total + number,
 0);
}
const multiply = function(numbers) {
  return numbers.reduce((total, number) =>
  total * number, 
  1);
}

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let b = 1;
  let total = 1;
//  if (a < 1){
//   return total
//  }
//  else{
  while(b <= a){
    total *= b;
    b++;
  }
  return total
 }
  
	
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
