//https://projecteuler.net/problem=2

const Title = 'Even Fibonacci numbers';

function Solve() {
  let previousFirst = 1, previousSecond = 1, sumOfPrevious = 0, evenValuedAdditions = 0;
  console.log(previousFirst, previousSecond, sumOfPrevious, evenValuedAdditions);

  while(sumOfPrevious < 4000000) {
    sumOfPrevious = previousFirst + previousSecond;

    previousFirst = previousSecond;
    previousSecond = sumOfPrevious;

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