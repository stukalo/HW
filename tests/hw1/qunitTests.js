QUnit.test("numbersSum should return correct result", function(assert) {
    assert.equal(numbersSum(1, 2), 3, "1 + 2 = 3");
});

QUnit.test('numberSum should throw Error', function(assert) {
   assert.throws(
       function () { numbersSum('1', '2') },
       Error('Invalid arguments')
   );
});