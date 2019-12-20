//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  let output = '';

  for (let i = string.length-1; i >=0; i--) {
    output = output += string.charAt(i)
  }

  return output
};
