// https://projecteuler.net/problem=4

const Title = 'Largest palindrome product';

function Solve() {
  
}

/**
 * Given a number, detect if it's a palindrome or not
 * @param {Integer} number - Number to test
 */
function IsPalindrome(number) {
  const stringified = number.toString();

  // Odd length so it definitely isn't a palindrome.
  if(stringified.length % 2 !== 0) {
    return false;
  }

  const firstHalf = stringified.substring(0, stringified.length / 2);
  const secondHalf = stringified.substring(stringified.length / 2, stringified.length).split('').reverse().join(''); // Grab the second half, split & reverse it and rejoin it again.

  return firstHalf === secondHalf;
}

module.exports = {
  Title,
  Solve,
}