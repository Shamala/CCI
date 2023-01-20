// Space complexity: O(n)
// Time complexity: O(n)
const checkPermutations = (str1, str2) => {
  let map = {};
  if (str1.length !== str2.length) return false;
  for (let character of str1) {
    if (character in map) map[character] += 1;
    else map[character] = 1;
  }
  console.log(map);
  for (let character of str2) {
    if (character in map) {
      if (map[character] === 1) delete map[character];
      else map[character] -= 1;
      console.log(map);
    } else {
      return false;
    }
  }
  if (map && Object.keys(map).length > 0) return false;
  else return true;
};
console.log(
  `checkPermutations(shamala,alamsha): ${checkPermutations(
    "shamala",
    "alamsha"
  )}`
);
console.log(`checkPermutations(sha,a): ${checkPermutations("sha", "a")}`);

// other option sort string and check equality. Time complexity: O(nlogn)
