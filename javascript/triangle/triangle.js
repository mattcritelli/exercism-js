//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.state = {
      sides: [a, b, c]
    }
  }

  verify(sides) {
    sides.sort((a,b) => a - b);
    if (sides[0] <= 0 || (sides[0] + sides[1] <= sides[2]))
      throw new Error("Invalid triangle")
  }

  kind() {
    const { sides } = this.state;
    this.verify(sides);

    const uniqueSides = new Set(sides).size;

    const TRIANGLE_TYPES = {
      1: 'equilateral',
      2: 'isosceles',
      3: 'scalene'
    };

    return TRIANGLE_TYPES[uniqueSides];
  }
}
