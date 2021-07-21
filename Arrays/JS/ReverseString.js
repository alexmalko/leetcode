var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i <= j) {
    let temp = s[i];
    s[i++] = s[j];
    s[j--] = temp;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
