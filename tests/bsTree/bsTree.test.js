describe('BSTree insert', function() {
    let instance;

    before(() => {
        instance = new BSTree();
    });

    afterEach(() => {
       instance.empty();
    });

    describe('insert value into the tree', function () {
       it('should insert single node', function () {
           const value = 5;
           const expectedRoot = new Entry(value);

           instance.insert(5);

           assert.deepEqual(instance.root, expectedRoot);
       });

       it('should insert left if value is less than root value', function() {
          const rootValue = 10;
          const leftValue = 5;

          instance.insert(rootValue);
          instance.insert(leftValue);

          assert.strictEqual(instance.root.value, rootValue);
          assert.strictEqual(instance.root.left.value, leftValue);
       });

       it('should insert right if value is grater than root value', function () {
          const rootValue = 10;
          const rightValue = 15;

          instance.insert(rootValue);
          instance.insert(rightValue);

          assert.strictEqual(instance.root.value, rootValue);
          assert.strictEqual(instance.root.right.value, rightValue);
       });
    });

});

describe('BSTree toArray', function () {
    let instance;

    before(() => {
        instance = new BSTree();
    });

    afterEach(() => {
        instance.empty();
    });

    describe('toArray convert tree to array', function () {
        const testData = [
            {
                valuesToAdd: [],
                expectedArray: [],
            },
            {
                valuesToAdd: [1],
                expectedArray: [1],
            },
            {
                valuesToAdd: [2, 1],
                expectedArray: [1, 2],
            },
            {
                valuesToAdd: [4, 5, 1],
                expectedArray: [1, 4, 5],
            },
            {
                valuesToAdd: [2, 1, 3, 4, 0],
                expectedArray: [0, 1, 2, 3, 4],
            },
        ];

        testData.forEach(function (data) {
            const { valuesToAdd, expectedArray } = data;

            it(`should return ${expectedArray}`, function () {
                valuesToAdd.forEach(function (value) {
                    instance.insert(value);
                });

                const actual = instance.toArray();

                assert.deepEqual(expectedArray, actual);
            });
        });
    });
});

describe('BSTree toString', function () {
    let instance;

    before(() => {
        instance = new BSTree();
    });

    afterEach(() => {
        instance.empty();
    });

    describe('toString convert tree to string', function () {
        const testData = [
            {
                valuesToAdd: [],
                expectedString: '{}',
            },
            {
                valuesToAdd: [1],
                expectedString: '{1}',
            },
            {
                valuesToAdd: [2, 1],
                expectedString: '{1, 2}',
            },
            {
                valuesToAdd: [4, 5, 1],
                expectedString: '{1, 4, 5}',
            },
            {
                valuesToAdd: [2, 1, 3, 4, 0],
                expectedString: '{0, 1, 2, 3, 4}',
            },
        ];

        testData.forEach(function (data) {
            const { valuesToAdd, expectedString } = data;

            it(`should return ${expectedString}`, function () {
                valuesToAdd.forEach(function (value) {
                    instance.insert(value);
                });

                const actual = instance.toString();

                assert.deepEqual(expectedString, actual);
            });
        });
    });
});

describe('BSTree constructor', function () {
    describe('constructor initialize instance', function () {
        it('should have constructor typeof BSTree', function () {
            const instance = new BSTree();

            assert.instanceOf(instance, BSTree);
        });
    });
});

describe('BSTree empty', function () {
    let instance;

    before(() => {
        instance = new BSTree();
    });

    describe('clean tree', function () {
        it('should set root to null', function () {
            instance.root = new Entry();

            instance.empty();

            assert.isNull(instance.root);
        });
    });
});

describe('BSTree remove', function() {
    let instance;

    before(() => {
        instance = new BSTree();
    });

    afterEach(() => {
        instance.empty();
    });

    describe('remove element by value', function() {
        const testData = [
            {
                valuesToAdd: [],
                valueToRemove: 1,
                expectedArray: [],
            },
            {
                valuesToAdd: [1],
                valueToRemove: 1,
                expectedArray: [],
            },
            {
                valuesToAdd: [1],
                valueToRemove: 2,
                expectedArray: [1],
            },
            {
                valuesToAdd: [2, 1],
                valueToRemove: 3,
                expectedArray: [1, 2],
            },
            {
                valuesToAdd: [2, 1],
                valueToRemove: 2,
                expectedArray: [1],
            },
            {
                valuesToAdd: [4, 5, 1],
                valueToRemove: 6,
                expectedArray: [1, 4, 5],
            },
            {
                valuesToAdd: [4, 5, 1],
                valueToRemove: 1,
                expectedArray: [4, 5],
            },
            {
                valuesToAdd: [2, 1, 3, 4, 0],
                valueToRemove: 5,
                expectedArray: [0, 1, 2, 3, 4],
            },
            {
                valuesToAdd: [2, 1, 3, 4, 0],
                valueToRemove: 3,
                expectedArray: [0, 1, 2, 4],
            },
        ];

        testData.forEach(function (data) {
            const { valueToRemove, valuesToAdd, expectedArray } = data;

            it(`should remove ${valueToRemove}`, function () {
                valuesToAdd.forEach(function (value) {
                    instance.insert(value);
                });

                instance.remove(valueToRemove);
                const actual = instance.toArray();

                assert.deepEqual(expectedArray, actual);
            });
        });
    });
});

describe('BSTree find', function () {
    describe('find first entry by value', function () {
        let instance;

        before(() => {
            instance = new BSTree();
        });

        afterEach(() => {
            instance.empty();
        });

        const testData = [
            {
                valuesToAdd: [],
                valueToFind: 1,
                isFound: false,
            },
            {
                valuesToAdd: [1],
                valueToFind: 2,
                isFound: false,
            },
            {
                valuesToAdd: [2, 1],
                valueToFind: 3,
                isFound: false,
            },
            {
                valuesToAdd: [2, 1],
                valueToFind: 2,
                isFound: true,
            },
            {
                valuesToAdd: [4, 5, 1],
                valueToFind: 6,
                isFound: false,
            },
            {
                valuesToAdd: [4, 5, 1],
                valueToFind: 1,
                isFound: true,
            },
            {
                valuesToAdd: [2, 1, 3, 4, 0],
                valueToFind: 5,
                isFound: false,
            },
            {
                valuesToAdd: [2, 1, 3, 4, 0],
                valueToFind: 3,
                isFound: true,
            },
        ];

        testData.forEach(function (data) {
            const { valueToFind, valuesToAdd, isFound } = data;

            it(`should found ${valueToFind} is ${isFound}`, function () {
                valuesToAdd.forEach(function (value) {
                    instance.insert(value);
                });

                const entry = instance.find(valueToFind);
                const isFoundActual = entry !== null;

                assert.strictEqual(isFoundActual, isFound);
            });
        });
    });
});

describe('Entry constructor', function() {
    describe('constructor initialize instance', function () {
        it('should have correct constructor', function() {
            const value = 5;

            const instance = new Entry(value);

            assert.instanceOf(instance, Entry);
            assert.isNull(instance.left);
            assert.isNull(instance.right);
            assert.strictEqual(instance.value, value);
        });
    });
});

describe('Entry minValue', function () {
    describe('returns minValue', function () {
        it('should return left leaf', function () {
            const entry = new Entry(10);
            entry.left = new Entry(5);
            entry.left.left = new Entry(4);

            const minValue = entry.minValue();

            assert.deepEqual(minValue, entry.left.left);
        });
    });
});