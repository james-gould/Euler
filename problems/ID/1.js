// https://projecteuler.net/problem=1

const Title = "Multiples of 3 and 5";

function Solve() {

  const multiples = Array.from(Array(1000).keys()).filter(item => item % 3 === 0 || item % 5 === 0);

  let total = 0;

  multiples.forEach((num) => {
    total += num;
  });

  console.log('Solution: ' + total);
}

module.exports = {
  Title,
  Solve,
}