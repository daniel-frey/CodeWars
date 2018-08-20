function capitalize(s) {
  let oddString = '',
    evenString = '';
  let resultsArray = [];
  for (i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      oddString += s[i].toUpperCase();
      evenString += s[i];
    } else {
      oddString += s[i];
      evenString += s[i].toUpperCase();
    }
  }
  resultsArray[0] = oddString;
  resultsArray[1] = evenString;

  return resultsArray;
};