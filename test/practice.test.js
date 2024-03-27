import capitalize from "../js/capitalize";
import reverse from "../js/reverse";

test("A capitalize function that takes a string and returns it with the first character capitalized", () => {
  expect(capitalize("this is a test")).toBe("This is a test");
});

test("A reverse string function that takes a string and return it reversed", () => {
  expect(reverse("mustafa")).toBe("afatsum");
});
