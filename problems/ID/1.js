// https://projecteuler.net/problem=1

const Title = "Multiples of 3 and 5";

function Solve() {

  // Create an array with items ranging from 0 -> 1000, filter them by != 0 and divisable by 3 or 5.
  const multiples = Array.from(Array(1000).keys()).filter(item => item != 0 ||  item % 3 === 0 || item % 5 === 0 );

  let total = 0;

  // Sum all items in the array
  multiples.forEach((num) => {
    total += num;
  });

  console.log('Solution: ' + total);
}

module.exports = {
  Title,
  Solve,
}