const { Square, Circle, Triangle } = require("../shapes.js");


describe('Shapes', () => {
    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
    describe('Triangle', () => {
      it('should create a blue sqaure', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });
  