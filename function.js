// const a = 20000000;
// const b = 30;

// console.log(a + b);
// console.log('The price of the apartment is: ', a);
// console.log('The price of the apartment is: ', a);
// console.log('The price of the apartment is: ', a);

// NORMAL FUNCTION

// function cookRice(x, y) {
//   return true;
// }

// console.log(cookRice());
// ARROW FUNCTION

// const cookRice = () => {
//   console.log('Get a Pot');
//   console.log('Get water');
//   console.log('Get fire');
//   console.log('Add rice to the pot');
//   console.log('Cook for 30 mins');
// };
// Day 1

// Day 2
// cookRice();

// // Day
// cookRice();

function calculator(x, y, operator /* parameter */) {
  if (operator === '+') {
    return x + y;
  } else if (operator === '-') {
    return x - y;
  } else if (operator === '*') {
    return x * y;
  } else if (operator === '/') {
    return x / y;
  } else {
    return null;
  }
}

const add = calculator(4, 6, '&' /* argument */);
console.log(add);
