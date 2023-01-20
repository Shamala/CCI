//pale -> pales true one addition
//pale -> ple true one deletion
//pale-> bale true one replace
//pale -> bales - false

const oneAway = (str1, str2) => {
  if (str1.length - str2.length > 1 || str1.length - str2.length < -1) {
    return false;
  } else {
    if (str1.length === str2.length) {
      let noMatch = 0;
      for (let i = 0; i < str1.length; i++) {
        if (noMatch <= 1) {
          if ((str1[i] = str2[i])) i++;
          else noMatch++;
        } else {
          return false;
        }
      }
    } else {
      let longString = str1.length > str2.length ? str1 : str2;
      let shortString = longString === str1 ? str2 : str1;
      let shortPointer = 0;
      let longPointer = 0;
      let noMatch = 0;
      while (shortPointer < shortString.length) {
        if (shortString[shortPointer] != longString[longPointer]) {
          if (noMatch < 1) {
            noMatch++;
            longPointer++;
          } else {
            return false;
          }
        }
        shortPointer++;
        longPointer++;
      }
    }
    return true;
  }
};

console.log(`oneAway(pale,pales): ${oneAway("pale", "pales")}`);
console.log(`oneAway(pale,ple): ${oneAway("pale", "ple")}`);
console.log(`oneAway(pale,bale): ${oneAway("pale", "bale")}`);
console.log(`oneAway(pale,bales): ${oneAway("pale", "bales")}`);
