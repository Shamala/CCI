// aabcccccaaa a2b1c5a3
//abcdef abdef
const stringCompression = (test) => {
  let newString = "";

  let previousCharacter = "";
  let counter = 0;
  for (let character of test) {
    if (previousCharacter === "") {
      previousCharacter = character;
      counter++;
    } else if (previousCharacter === character) {
      counter++;
    } else {
      newString += previousCharacter + counter;
      previousCharacter = character;
      counter = 1;
    }
  }
  return newString.length > test.length ? test : newString;
};

console.log(
  `stringCompression('aabcccccaaa'): ${stringCompression("aabcccccaaa")}`
);
console.log(`stringCompression('abcdef'): ${stringCompression("abcdef")}`);
