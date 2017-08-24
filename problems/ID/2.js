//https://projecteuler.net/problem=2

const Title = 'Even Fibonacci numbers';

function Solve() {

  // Our first number is 1, meaning that our "previous" number is also 1. 
  // We need to track the previous number from the last iteration and from 2 iterations back, the sum of the 2 previous numbers and the even valued additions.
  let previousFirst = 1, previousSecond = 1, sumOfPrevious = 0, evenValuedAdditions = 0;

  while(sumOfPrevious < 4000000) {
    // sumOfPrevious is now the value of our next value.
    sumOfPrevious = previousFirst + previousSecond;

    // We aren't reassiging sumOfPrevious so we can now switch the previous numbers to their correct values
    previousFirst = previousSecond;
    previousSecond = sumOfPrevious;

    // If sumOfPrevious is an even number, add it to evenValuedAdditions
    if(sumOfPrevious % 2 === 0) {
      evenValuedAdditions += sumOfPrevious
    }
  }

  console.log('Solution: ' + evenValuedAdditions);
}

module.exports = {
  Title,
  Solve,
}