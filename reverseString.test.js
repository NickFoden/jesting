const reverseString = require("./reverseString");

//Check if function defined
test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

//See if function works
test("reverseString function reverses string", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
