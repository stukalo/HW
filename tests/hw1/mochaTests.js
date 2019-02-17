describe('numbersSum', function() {
    before(function() {
        // console.log("Before all hw1");
    });
    after(function() {
        // console.log("After all hw1");
    });

    beforeEach(function() {
        // console.log("Before test");
    });
    afterEach(function() {
      //  console.log("After test");
    });

    it('should count sum of items', function() {
        const args = [
            {a: 1, b: 1, expected: 2},
            {a: 5, b: 6, expected: 11},
        ];

        args.forEach(function(values) {
            //given
            const {a, b, expected} = values;
            //when
            const actual = numbersSum(a, b);
            //then
            assert.equal(actual, expected);
        });
    });

    it('should throw Error if invalid args', function() {
        const invalidArgs = [
            {a: void 0, b: void 0},
            {a: null, b: null},
            {a: '1', b: '1'},
            {a: true, b: false},
            {a: {}, b: {}},
        ];

        invalidArgs.forEach(function(values) {
            //given
            const {a, b} = values;

            assert.throws(function() {
                numbersSum(a, b)
            }, Error, 'Invalid arguments');
        });
    });
});

describe('numbersSumOrMultiply', function() {
    it('should return multiply if a is even', function() {
        const testData = [
            {a: 2, b: 3, expected: 6},
            {a: 8, b: 2, expected: 16},
        ];

        testData.forEach(function(data) {
            const {a, b} = data;

            const actual = numberSumOrMultiply(a, b);

            assert.strictEqual(actual, data.expected);
        });
    });

    it('should return sum if a is odd', function() {
        const testData = [
            {a: 3, b: 2, expected: 5},
            {a: 7, b: 1, expected: 8},
        ];

        testData.forEach(function(data) {
            const {a, b} = data;

            const actual = numberSumOrMultiply(a, b);

            assert.strictEqual(actual, data.expected);
        });
    });
});

describe('getCoordinateQuarter', function() {
    it('should return 1 when x > 0 and y > 0', function() {
        const testData = [
            {x: 1, y: 3},
            {x: 100, y: 150},
        ];

        testData.forEach(function(data) {
            const {x, y} = data;

            const actual = getCoordinateQuarter(x, y);

            assert.strictEqual(actual, 1);
        });
    });

    it('should return 2 when x < 0 and y > 0', function() {
        const testData = [
            {x: -2, y: 1},
            {x: -4, y: 5},
        ];

        testData.forEach(function(data) {
            const {x, y} = data;

            const actual = getCoordinateQuarter(x, y);

            assert.strictEqual(actual, 2);
        });
    });

    it('should return 3 when x < 0 and y < 0', function() {
        const testData = [
            {x: -1, y: -3},
            {x: -5, y: -7},
        ];

        testData.forEach(function(data) {
            const {x, y} = data;

            const actual = getCoordinateQuarter(x, y);

            assert.strictEqual(actual, 3);
        });
    });

    it('should return 4 when x > 0 and y < 0', function() {
        const testData = [
            {x: 1, y: -3},
            {x: 5, y: -7},
        ];

        testData.forEach(function(data) {
            const {x, y} = data;

            const actual = getCoordinateQuarter(x, y);

            assert.strictEqual(actual, 4);
        });
    });

    it('should return Error if point is on axis', function() {
       const testData = [
           {x: 0, y: 0},
           {x: 0, y: 1},
           {x: 0, y: -1},
           {x: -1, y: 0},
           {x: 1, y: 0},
        ];

       testData.forEach(function(data) {
          const {x, y} = data;

          assert.throws(function() {
              getCoordinateQuarter(x, y);
          }, Error, 'The point is on the axis');
       });
    });
});

describe('calculateMaximumPlusThree', function() {
   it('should calculate correctly', function() {
      const testData = [
          {a: 1, b: 2, c: 3, expected: 9},
          {a: 0, b: 5, c: 2, expected: 10},
          {a: 3, b: 2, c: 2, expected: 15},
      ];

      testData.forEach(function(data) {
         const {a, b, c, expected} = data;

         const actual = calculateMaximumPlusThree(a, b, c);

         assert.strictEqual(actual, expected);
      });
   });
});

describe('getStudentMarkByRating', function() {
   it('should return F if rating is in 0 - 19', function() {
      const ratings = [0, 1, 5, 18, 19];

      ratings.forEach(function(rating) {
          const actual = getStudentMarkByRating(rating);

          assert.strictEqual(actual, 'F')
      });
   });

   it('should return E if rating is in 20 - 39', function() {
      const ratings = [20, 21, 32, 38, 39];

      ratings.forEach(function(rating) {
          const actual = getStudentMarkByRating(rating);

          assert.strictEqual(actual, 'E');
      })
   });

   it('should return D if rating is 40 - 59', function() {
       const ratings = [40, 41, 52, 58, 59];

       ratings.forEach(function(rating) {
           const actual = getStudentMarkByRating(rating);

           assert.strictEqual(actual, 'D');
       });
   });

   it('should return C if rating is in 60 - 74', function() {
       const ratings = [60, 61, 72, 73, 74];

       ratings.forEach(function(rating) {
          const actual = getStudentMarkByRating(rating);

          assert.strictEqual(actual, 'C');
       });
   });

   it('should return B if rating is in 75 - 89', function() {
       const ratings = [75, 76, 81, 88, 89];

       ratings.forEach(function(rating) {
           const actual = getStudentMarkByRating(rating);

           assert.strictEqual(actual, 'B');
       });
   });

   it('should return A if rating is in 90 - 100', function() {
      const ratings = [90, 91, 97, 99, 100];

      ratings.forEach(function(rating) {
          const actual = getStudentMarkByRating(rating);

          assert.strictEqual(actual, 'A');
      });
   });

   it('should throw Error if rating is out of range 0 - 100', function() {
      const ratings = [-1, -100, 101, 250];

      ratings.forEach(function(rating) {
          assert.throws(function() {
              getStudentMarkByRating(rating)
          }, Error, 'Rating is out of range 0 - 100');
      });
   });
});

describe('getEvensSumInRangeFromOneToHundred', function() {
    it('should return 2550', function() {
        const expected = 2550;

        const actual = getEvensSumInRangeFromOneToHundred();

        assert.strictEqual(actual, expected);
    });
});


describe('checkIsPrime', function() {
    it('should reutn false if number is 0 or 1', function() {
        const numbers = [0, 1];

        numbers.forEach(function(number) {
           const actual = checkIsPrime(number);

           assert.isFalse(actual);
        });
    });

    it('should return true if it can be divide by itself only', function() {
        const primeNumbers = [2, 3, 5, 7, 11, 31];

        primeNumbers.forEach(function(number) {
            const actual = checkIsPrime(number);

            assert.isTrue(actual);
        });
    });

    it('should return false if it can be divided by other number', function() {
        const notPrimeNumbers = [4, 6, 8, 12, 21];

        notPrimeNumbers.forEach(function(number) {
            const actual = checkIsPrime(number);

            assert.isFalse(actual);
        });
    });
});

describe('squareRoot', function() {
   it('should return square root', function() {
       const testData = [
           {value: 4, expected: 2},
           {value: 1, expected: 1},
           {value: 10, expected: 3},
           {value: 16, expected: 4},
           {value: 25, expected: 5},
           {value: 38, expected: 6},
       ];

       testData.forEach(function(data) {
           const {value, expected} = data;

           const actual = squareRoot(value);

           assert.strictEqual(actual, expected);
       })
   });
});

describe('squareRootBinary', function() {
    it('should return square root', function() {
        const testData = [
            {value: 4, expected: 2},
            {value: 1, expected: 1},
            {value: 10, expected: 3},
            {value: 16, expected: 4},
            {value: 25, expected: 5},
            {value: 38, expected: 6},
        ];

        testData.forEach(function(data) {
            const {value, expected} = data;

            const actual = squareRootBinary(value);

            assert.strictEqual(actual, expected);
        })
    });
});

describe('factorial', function() {
   it('should return factorial', function() {
      const testData = [
          {number: 0, expected: 1},
          {number: 1, expected: 1},
          {number: 2, expected: 2},
          {number: 3, expected: 6},
          {number: 4, expected: 24},
          {number: 5, expected: 120},
      ];
      
      testData.forEach(function(data) {
         const {number, expected} = data;
         
         const actual = factorial(number);
         
         assert.strictEqual(actual, expected);
      });
   });
});

describe('countDigitsSum', function() {
   it('should return digits sum', function() {
       const testData = [
           {number: 1, expected: 1},
           {number: 2, expected: 2},
           {number: 10, expected: 1},
           {number: 11, expected: 2},
           {number: 99, expected: 18},
           {number: 100, expected: 1},
           {number: 101, expected: 2},
           {number: 354, expected: 12},
       ];

       testData.forEach(function(data) {
          const {number, expected} = data;

          const actual = countDigitsSum(number);

          assert.strictEqual(actual, expected);
       });
   });
});

describe('reflect', function() {
    it('should reflect number', function() {
        const testData = [
            {number: 1, expected: 1},
            {number: 11, expected: 11},
            {number: 123, expected: 321},
            {number: 1234, expected: 4321},
        ];

        testData.forEach(function(data) {
            const {number, expected} = data;

            const actual = reflect(number);

            assert.strictEqual(actual, expected);
        });
    });
});

describe('getMinValue', function() {
   it('should return min value or null', function() {
       const testData = [
           {array: [], expected: null},
           {array: [1], expected: 1},
           {array: [1, 2], expected: 1},
           {array: [5, 12, 32, -8, -1], expected: -8},
       ];

       testData.forEach(function(data) {
           const {array, expected} = data;

           const actual = getMinValue(array);

           assert.strictEqual(actual, expected);
       });
   });
});

describe('getMaxValue', function() {
    it('should return max value or null', function() {
        const testData = [
            {array: [1], expected: 1},
            {array: [1, 2], expected: 2},
            {array: [5, 12, 32, -8, -1], expected: 32},
        ];

        testData.forEach(function(data) {
            const {array, expected} = data;

            const actual = getMaxValue(array);

            assert.strictEqual(actual, expected);
        });
    });

    it('should throw Error if array is undefined or empty', function() {
        const testData = [[], void 0];

        testData.forEach(function(data) {
           assert.throws(function() {
               getMaxValue(data);
           }, Error, 'Invalid operation');
        });
    })
});

describe('getMinValueIndex', function() {
    it('should return index of mix value', function () {
        const testData = [
            {array: [1], expected: 0},
            {array: [1, 2, 0, 3], expected: 2},
            {array: [10, -1, 0, 1], expected: 1},
        ];

        testData.forEach(function(data) {
            const {array, expected} = data;

            const actual = getMinValueIndex(array);

            assert.strictEqual(actual, expected);
        });
    });

    it('should throw Error if array is undefined or empty', function() {
        const testData = [[], void 0];

        testData.forEach(function(data) {
            assert.throws(function() {
                getMaxValue(data);
            }, Error, 'Invalid operation');
        });
    })
});

describe('getMaxValueIndex', function() {
   it('should return index of max value', function () {
      const testData = [
          {array: [1], expected: 0},
          {array: [1, 2], expected: 1},
          {array: [-1, 0, 1], expected: 2},
      ];

      testData.forEach(function(data) {
          const {array, expected} = data;

          const actual = getMaxValueIndex(array);

          assert.strictEqual(actual, expected);
      });
   });

    it('should throw Error if array is undefined or empty', function() {
        const testData = [[], void 0];

        testData.forEach(function(data) {
            assert.throws(function() {
                getMaxValue(data);
            }, Error, 'Invalid operation');
        });
    });
});
