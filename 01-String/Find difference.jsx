var findTheDifference = function (s, t) {
  let S = s.split("");
  let T = t.split("");

  for (let i = 0; i < T.length; i++) {
    if (!S.includes(T[i])) {
      return T[i];
    }
  }
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("a", "aa"));
console.log(findTheDifference("ae", "aea"));
