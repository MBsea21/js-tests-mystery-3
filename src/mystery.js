export const mystery3 = (string1, string2) => {
  let difCount = 0;
  if (string1 === string2) {
    return 0;
  }
  let i = 0
  do {
    if (string1[i] !== string2[i]) {
      difCount += 1;
    }
    i++;
  }
  while (i < string1.length && i < string2.length);

  if (string1.length > i) {
    difCount += (string1.length - i);
  } else if (string2.length > i) {
    difCount += (string2.length - i);
  }

  return difCount;
};
