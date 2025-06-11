const calculator = require("../models/calculator.js");

test("2 + 2 should be 4", () => {
  const sum = calculator.sum(2, 2);
  expect(sum).toBe(4);
});

test("5 + 100 should be 105", () => {
  const sum = calculator.sum(5, 100);
  expect(sum).toBe(105);
});

test("banana + 100 should be Error", () => {
  const sum = calculator.sum("banana", 100);
  expect(sum).toBe("Error");
});
