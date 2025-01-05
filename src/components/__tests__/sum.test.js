import { sum } from "../sum"

test("sum function calculates the sum of two number", () => {
    const result = sum(4, 7)

    //Assertion
    expect(result).toBe(11)
});