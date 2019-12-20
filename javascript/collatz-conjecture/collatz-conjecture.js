//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if (n <= 0) throw new Error("Only positive numbers are allowed");

  let input = n;
  let count = 0;

  while (input > 1) {
    if(input % 2 === 0) {
      input /= 2;
      count++;
    } else {
      input = (input * 3) + 1;
      count++;
    }
  }
  return count;
};
