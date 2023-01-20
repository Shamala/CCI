//Time Complexity : O(n)
//Space Complexity: O(n)
const isUnique = (test) => {
  let map = {};
  const testString = test.toLowerCase();

  for (let character of testString) {
    if (character in map) return false;
    else map[character] = character;
  }

  return true;
};
console.log(`isUnique('Test') : ${isUnique("Test")}`);
console.log(`isUnique('Surya') : ${isUnique("Surya")}`);
//Time Complexity : O(n^2)

const isUniqueNoAdditionalSpace = (test) => {
  const testString = test.toLowerCase();

  for (let i = 0; i < testString.length; i++) {
    for (let j = i + 1; j < testString.length; j++) {
      if (testString[i] === testString[j]) return false;
    }
  }

  return true;
};
console.log(
  `isUniqueNoAdditionalSpace('Test') : ${isUniqueNoAdditionalSpace("Test")}`
);
console.log(
  `isUniqueNoAdditionalSpace('Surya') : ${isUniqueNoAdditionalSpace("Surya")}`
);

// Other ways: Sort the string O(nlogn) Space complexity with space complexity required to sort itself
