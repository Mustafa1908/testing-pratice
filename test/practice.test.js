import capitalize from "../js/capitalize";
import reverse from "../js/reverse";
import calculator from "../js/calculator";
import caesarCipher from "../js/caesarCipher";

test("A capitalize function that takes a string and returns it with the first character capitalized", () => {
  expect(capitalize("this is a test")).toBe("This is a test");
});

test("A reverse string function that takes a string and return it reversed", () => {
  expect(reverse("mustafa")).toBe("afatsum");
});

test("An add function that takes two numbers and then return the sum of the two numbers", () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test("An add function that takes two numbers and return them subtracted", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("An add function that takes two numbers and then return them multiplied", () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test("An add function that takes two numbers and then return them divided", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("A caesar Cipher function that take a string and a shift factor and return the string with each character shifted", () => {
  expect(caesarCipher("mus.!tafa.", 3)).toBe("PXV.!WDID.");
});
