// https://projecteuler.net/problem=1

const Title = "Multiples of 3 and 5";

function Solve() {
  let multiples = [];

  for(let i = 1; i < 1000; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      multiples.push(i);
    }
  }

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