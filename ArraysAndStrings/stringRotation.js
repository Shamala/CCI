import isSubstring from "@Shamala/helpercci/isSubstring.js";

const stringRotation = (string1, string2) => {
  return isSubstring(string2 + string2, string1);
};

console.log(
  `stringRotation('waterbottle','erbottlewat'): ${stringRotation(
    "waterbottle",
    "erbottlewat"
  )}`
);
console.log(
  `stringRotation('waterbottleeeeer','erbottlee'): ${stringRotation(
    "waterbottleeeeer",
    "erbottlee"
  )}`
);
