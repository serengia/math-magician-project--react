import calculate from "./logic/calculate";
import operate from "./logic/operate";

describe("Calculator", () => {
  test("returns empty obj for AC", () => {
    const testObj = {
      total: 0,
      next: null,
      operation: null,
    };
    const buttonName = "AC";
    const obj = calculate(testObj, buttonName);

    expect(obj).toEqual(testObj);
  });
});

describe("Operate", () => {
  const num1 = 12;
  const num2 = 3;
  const operation = "+";
  test("returns the expected result", () => {
    const result = operate(num1, num2, operation);

    expect(result).toMatch(`15`);
  });
});
