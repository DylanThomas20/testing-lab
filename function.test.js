let functions = require("./functions.js");

test("test to returnTwo", () => {
  expect(functions.returnTwo()).toBe(2);
});

test("greeting test", () => {
  expect(functions.greeting("James")).toBe("Hello, James.");
});

test("addition test", () => {
  expect(functions.add(5, 9)).toBe(14);
});

describe("Math functions", () => {
  test("addition test", () => {
    expect(functions.add(5, 9)).toBe(14);
  });
  test("Subtraction Test ", () => {
    expect(functions.subtract(5, 9)).toBe(-4);
  });
  test("Multiplication Test", () => {
    expect(functions.multiply(5, 9)).toBe(45);
  });
  test("Division Test", () => {
    expect(functions.divide(5, 10)).toBe(0.5);
  });
});
