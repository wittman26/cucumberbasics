const { Given, Then, When } = require('cucumber')
const Calculator = require('../lib_example/calculator')
const assert = require("assert")

let calculator;

Given('the numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    calculator.add();
});

Then('should the result be {int}', function (expected_value) {
    assert.equal(calculator.getResult(), expected_value)
});