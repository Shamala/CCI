//Space Complexity: O(n) need to convert to array in case of js otherwise O(1)
//Time Complexity: O(n)
const urlify = (str, length) => {
  let totalLength = str.length;

  if (totalLength === length) return str;

  totalLength = totalLength - 1;
  let i = length - 1;

  str = [...str];

  while (i >= 0) {
    if (str[i] === " ") {
      str[totalLength - 2] = "%";

      str[totalLength - 1] = "2";
      str[totalLength] = "0";
      i--;
      totalLength -= 3;
    } else {
      str[totalLength] = str[i];
      totalLength--;
      i--;
    }
  }
  return str.join("");
};

console.log(
  `urlify(Mr John Smith    , 13): ${urlify("Mr John Smith    ", 13)}`
);
