// https://projecteuler.net/problem=3

const Title = 'Largest prime factor';

function Solve() {
  // 
}

function IsPrime(num) {
  if(num != 2 && num % 2 === 0) {
    return false;
  }
}

module.exports = {
  Title,
  Solve,
}