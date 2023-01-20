const palindromePermutation = (testStr) => {
  if (!testStr || testStr.length === 1) return true;

  testStr = testStr.replace(/ /g, "").toLowerCase();

  let map = {};
  for (let character of testStr) {
    if (character === " ") continue;
    if (character in map) delete map[character];
    else map[character] = 1;
    console.log(map);
  }
  if (testStr.length % 2 === 1) {
    //its odd
    if (Object.values(map).length === 1 && Object.values(map).indexOf(1) === 0)
      return true;
  } else {
    if (map && Object.keys(map).length === 0) return true;
  }
  return false;
};
console.log(
  `palindromePermutation(Taco cat): ${palindromePermutation("Taco cat")}`
);

console.log(
  `palindromePermutation(sad cat): ${palindromePermutation("sad cat")}`
);
